import Axios from 'axios';
import FormData from 'form-data';

export default async function embedSendDocument(req, res) {
    const file = req.files.Files;
    let url = process.env.apiHost + '/v1/document/createEmbeddedRequestUrl/';
    const form = new FormData();
    form.append('Signers', req.body.Signers);
    form.append('Files', file.data, file.name);
    form.append('Title', 'API Sample');
    form.append('SendViewOption', 'PreparePage');
    form.append('ShowToolbar', 'true');
    form.append('RedirectUrl', 'http://localhost:4200/embedDocument/completed');
    Axios.post(url, form,  {
        headers: {
            'X-API-KEY': process.env.apiKey,
            'Content-Type': 'multipart/form-data; boundary=' + form.getBoundary(),
        },
    }).then(async function(response) {
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