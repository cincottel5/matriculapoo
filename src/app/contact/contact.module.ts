import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ContactComponent } from './list/contact.component';
import { ContactFormComponent } from './form/contact-form.component';
import { ContactDetailComponent } from './detail/contact-detail.component';

import { ContactService } from '@app/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactDetailComponent
  ],
  providers: [
    ContactService
  ]
})

export class ContactModule { }
