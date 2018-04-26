import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { EnrollmentComponent } from './list/enrollment.component';
import { EnrollmentFormComponent } from './form/enrollment-form.component';
import { EnrollmentDetailComponent } from './detail/enrollment-detail.component';

import { EnrollmentService } from '@app/core';
import { UserService } from '@app/core';
import { DatePipe } from '@angular/common';

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
    EnrollmentComponent,
    EnrollmentFormComponent,
    EnrollmentDetailComponent
  ],
  providers: [
    EnrollmentService,
    UserService,
    DatePipe
  ]
})

export class EnrollmentModule { }
