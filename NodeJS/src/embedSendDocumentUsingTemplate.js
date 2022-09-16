import Axios from 'axios';

export default async function embedSendDocumentFromTemplate(req, res) {
    let templateId = req.body.templateId;
    let url = process.env.apiHost + '/v1/template/createEmbeddedRequestUrl/';
    let data = { 
        redirectUrl: 'http://localhost:4200/embedDocument/completed',
        sendViewOption: 'PreparePage',
        showToolbar: true,
        showSaveButton: true,
        showSendButton: true,
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
        return res.json(response.data);
    })
    .catch(function(error) {
        if (error && error.response) {
            return res.status(error.response.status).json(error.response.data);
        } else {
            return res.status(400).json(error);
        }
    })
};