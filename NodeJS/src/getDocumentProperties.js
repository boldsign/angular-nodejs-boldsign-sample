import Axios from 'axios';

export default async function getDocumentProperties(req, res) {
    let url = process.env.apiHost + '/v1/document/properties/';
    let documentId = req.query.documentId;

    Axios.get(url, {
        headers: {
            'X-API-KEY': process.env.apiKey,
            'Content-Type': 'application/json'
        },
        params: { documentId },
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