import dotenv from 'dotenv';
import express from 'express';
import sendDocument from './src/sendDocument.js';
import sendDocumentFromTemplate from './src/sendDocumentUsingTemplate.js';
import getDocumentProperties from './src/getDocumentProperties.js';
import embedSigning from './src/embedSigning.js';
import embedSendDocument from './src/embedSendDocument.js';
import embedSendDocumentUsingTemplate from './src/embedSendDocumentUsingTemplate.js';
import fileUpload from 'express-fileupload';
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(fileUpload());

app.post('/api/document/send', async(req, res) => {
    return await sendDocument(req, res);
});

app.post('/api/template/send', async(req, res) => {
    return await sendDocumentFromTemplate(req, res);
});

app.get('/api/getDocumentProperties', async(req, res) => {
    return await getDocumentProperties(req, res);
});

app.post('/api/embedSigning', async(req, res) => {
    return await embedSigning(req, res);
});

app.post('/api/document/createEmbeddedRequestUrl', async(req, res) => {
    return await embedSendDocument(req, res);
});

app.post('/api/template/createEmbeddedRequestUrl', async(req, res) => {
    return await embedSendDocumentUsingTemplate(req, res);
});

app.listen(3080, () => {
    console.log('Server listening on the port 3080');
});

