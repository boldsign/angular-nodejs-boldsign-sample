# eSignature examples with Angular and NodeJS – BoldSign API
This repository contains a variety of code examples for working with [BoldSign eSignature API](https://boldsign.com/esignature-api/?utm_source=github&utm_medium=backlinks), and this code examples are built with Angular and NodeJS.

[![API Demo][api demo badge]][api demo link]

## Scenarios covered

This repository includes the below list of code examples using the BoldSign APIs:

- [Send document for signing](/Angular/src/app/sendDocument/)
- [Get detailed information of the document](/Angular/src/app/getDocumentProperties/)
- [Send document from template](/Angular/src/app/sendDocumentUsingTemplate/)
- [Embed signing process within your app](/Angular/src/app/embedSigning/)
- [Embed send document within your app](/Angular/src/app/embedSendDocument/)
- [Embed send document using template within your app](/Angular/src/app/embedSendDocumentUsingTemplate/)

## Prerequisites
1. Signup for [BoldSign trial](https://account.boldsign.com/signup?planId=101)
2. Acquire needed BoldSign app credentials from here. [Authentication - Help Center - BoldSign](https://boldsign.com/help/api/general/authentication/#basic-authentication)
3. Check the node version, it should be v14.15.0 or above.
4. And also check if Angular is installed, if not kindly run this command on your terminal to install
```py
	npm install -g @angular/cli
```
5. Now you have all the prerequisites ready to start BoldSign API for Angular.

## Steps to run sample

1. Before running the sample, open the env file in the NodeJS folder, and add your API key acquired from the [BoldSign Web App](https://app.boldsign.com/api-management/api-key/) in the ApiClient, by replacing "***APIKey***" on the line no 1.
2. To run the [Send document from template](/Angular/src/app/sendDocumentUsingTemplate/) sample, create a template from the web app with necessary fields. Copy the template ID from the web app once the template has been created. Add the copied template ID, in the sample template ID text box.
3. To run the [Embed signing process within your app](/Angular/src/app/embedSigning/) and [Embed send document using template within your app](/Angular/src/app/embedSendDocumentUsingTemplate/) sample, create a template from the web app with necessary fields. Copy the template ID from the web app once the template has been created. Add the copied template ID, in the sample template ID text box. 

### Angular
1. Open a new terminal and install the packages by using `npm install`.
2. Run `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### NodeJS
1. Open a new terminal and install the packages by using `npm install`.
2. Run `npm run dev`. Server is listening the port.

## Useful Resources
- [Send document from template by filling existing fields](https://boldsign.com/help/api/template/send-document-to-sign-using-template/#send-document-from-template-by-filling-existing-fields)
- [Send document for sign](https://boldsign.com/help/api/document/send-document-for-sign/)
- [API Reference Link](https://api.boldsign.com/swagger/index.html)

### Contact Us
Any feedback or queries? Please feel free to [contact our support team](https://boldsign.com/contact-us/) or mail to support@boldsign.com.

[api demo link]: https://demos.boldsign.com/
[api demo badge]: https://img.shields.io/badge/-API%20Demo-blue
