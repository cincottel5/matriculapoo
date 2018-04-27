import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { UserComponent } from './list/user.component';
import { UserFormComponent } from './form/user-form.component';
import { UserDetailComponent } from './detail/user-detail.component';

import { UserService } from '@app/core';

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
    UserComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  providers: [
    UserService
  ]
})

export class UserModule { }
