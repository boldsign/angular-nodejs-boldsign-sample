import Axios from 'axios';

export default async function sendDocumentFromTemplate(req, res) {
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
        return res.json(response.data.documentId);
    })
    .catch(function(error) {
        if (error && error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else {
            return res.status(400).json(error);
        }
    })
};