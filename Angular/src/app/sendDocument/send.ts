import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './send.html'
})

export class SendDocumentComponent implements OnInit {
	userForm!: FormGroup;
  isDocumentSend!: boolean;
  showLoading!: boolean;
  documentId!: string;
  selectedFile!: File;

  constructor (
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  onFileSelct(event: any): void {
    this.isDocumentSend = false;
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit(): void {
    this.isDocumentSend = false;
    if (this.userForm.invalid) {
      console.warn('Fill required fields');
    } else {
      this.showLoading = true;
      // Set the proper bounds value to each form field based on the uploaded file whatever you want.
      let signerData = {
        "name": this.userForm.value.name,
        "emailAddress": this.userForm.value.email,
        "signerType": "Signer",
        "formFields":
        [
          {
            "id": "Signature_Field",
            "fieldType": "Signature",
            "pageNumber": 1,
            "bounds":
            {
              "x": 440.5,
              "y": 242,
              "width": 124,
              "height": 32
            },
            "isRequired": true
          }
        ]
      };
      let SignerList = JSON.stringify(signerData);
      const formData = new FormData();
      formData.append('Signers', SignerList);
      formData.append('Files', this.selectedFile, this.selectedFile.name);
      this.http.post('/api/document/send', formData)
      .subscribe(data => {
        this.showLoading = false;
        this.isDocumentSend = true;
        this.documentId = data.toString();
      });
    }
  }

  ngOnInit()
  {
    this.isDocumentSend = false;
    this.showLoading = false;
  	this.userForm = this.formBuilder.group({
      file: ['', Validators.required],
  		name: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
  	});
  }
}
