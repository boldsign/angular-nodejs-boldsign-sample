import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { EmbedSendDocument } from './embedSendDocument/send';
import { EmbedSendDocumentUsingTemplate } from './embedSendDocumentUsingTemplate/send';
import { EmbedSigningComponent } from './embedSigning/embedSigning';
import { DocumentPropertiesComponent } from './getDocumentProperties/document';
import { SendDocumentComponent } from './sendDocument/send';
import { SendDocumentUsingTemplateComponent } from './sendDocumentUsingTemplate/send';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EmbedSendDocumentRedirect } from './redirect';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    EmbedSendDocument,
    EmbedSendDocumentUsingTemplate,
    EmbedSigningComponent,
    DocumentPropertiesComponent,
    SendDocumentComponent,
    SendDocumentUsingTemplateComponent,
    EmbedSendDocumentRedirect
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
