import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmbedSendDocumentCompleted } from './completed';
import { EmbedSendDocumentRedirect } from './redirect';
import { EmbedSendDocument } from './embedSendDocument/send';
import { EmbedSendDocumentUsingTemplate } from './embedSendDocumentUsingTemplate/send';
import { EmbedSigningComponent } from './embedSigning/embedSigning';
import { DocumentPropertiesComponent } from './getDocumentProperties/document';
import { SendDocumentComponent } from './sendDocument/send';
import { SendDocumentUsingTemplateComponent } from './sendDocumentUsingTemplate/send';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: 'embedDocument/completed', component: EmbedSendDocumentCompleted },
  { path: 'embedDocument/redirect', component: EmbedSendDocumentRedirect },
  { path: 'embedSend', component: EmbedSendDocument },
  { path: 'embedSendUsingTemplate', component: EmbedSendDocumentUsingTemplate },
  { path: 'embedSigning', component: EmbedSigningComponent },
  { path: 'getDocumentProperties', component: DocumentPropertiesComponent },
  { path: 'sendDocument', component: SendDocumentComponent },
  { path: 'sendDocumentUsingTemplate', component: SendDocumentUsingTemplateComponent },
  { path: '', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
