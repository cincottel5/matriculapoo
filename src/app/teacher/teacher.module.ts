import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TeacherComponent } from './list/teacher.component';
import { TeacherFormComponent } from './form/teacher-form.component';
import { TeacherDetailComponent } from './detail/teacher-detail.component';

import { TeacherService } from '@app/core';
import { PersonService, PersonFactory } from '@app/core';

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
    TeacherComponent,
    TeacherFormComponent,
    TeacherDetailComponent
  ],
  providers: [
    TeacherService, 
    PersonService, 
    PersonFactory
  ]
})

export class TeacherModule { }
