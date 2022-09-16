import Axios from 'axios';

export default async function embedSigning(req, res) {
    let templateId = req.body.templateId;
    let url = process.env.apiHost + '/v1/template/send/';
    let data = { 
        roles: [
            {
                roleIndex: 1,
                signerName: req.body.name,
                signerEmail: req.body.email,
            }
        ]
    };

    Axios.post(url, data, {
        headers: {
            'X-API-KEY': process.env.apiKey,
            'Content-Type': 'application/json'
        },
        params: { templateId },
    })
    .then(async function(response) {
        let docId = response.data.documentId;
        try {
            let signLink = await getEmbedLink(docId, req.body.email);
            return res.json({documentId: docId, signLink});
        } catch (e) {
            return res.status(e.response.status).json(e.response.data);
        }
    })
    .catch(function(error) {
        if (error && error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else {
            return res.status(400).json(error);
        }
    })
};

async function getEmbedLink(docId, signerEmail) {
    return new Promise((resolve, reject) => {
        let url = process.env.apiHost + '/v1/document/getEmbeddedSignLink/';
        let redirectUrl = 'http://localhost:4200/embedDocument/completed';

        Axios.get(url, {
            headers: {
                'X-API-KEY': process.env.apiKey,
                'Content-Type': 'application/json'
            },
            params: { documentId: docId, signerEmail: signerEmail, redirectUrl: redirectUrl },
        })
        .then(function(response){
            return resolve(response.data.signLink);
        })
        .catch(function(error) {
            reject(error);
            return;
        })
    });
}