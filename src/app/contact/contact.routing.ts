import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './list/contact.component';
import { ContactFormComponent } from './form/contact-form.component';
import { ContactDetailComponent } from './detail/contact-detail.component';

import { AuthGuard } from '@app/core';

export const ContactRouting = RouterModule.forChild([
  {
    path: 'contacts',
    children: [
      { path: '', canActivate: [AuthGuard],component: ContactComponent },
      { path: 'add', canActivate: [AuthGuard],component: ContactFormComponent },
      { path: 'edit/:id', canActivate: [AuthGuard],component: ContactFormComponent },
      { path: 'details/:id', canActivate: [AuthGuard],component: ContactDetailComponent }
    ]
  }
])
