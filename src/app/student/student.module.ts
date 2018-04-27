import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StudentComponent } from './list/student.component';
import { StudentFormComponent } from './form/student-form.component';
import { StudentDetailComponent } from './detail/student-detail.component';

import { StudentService } from '@app/core';
import { PersonService } from '@app/core';
import { AuthGuard } from '@app/core';

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
    StudentComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentService, 
    PersonService,
    AuthGuard
  ]
})

export class StudentModule { }
