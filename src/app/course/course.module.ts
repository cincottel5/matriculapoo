import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CourseFormComponent} from './form/course-form.component';
import {CourseDetailComponent} from './detail/course-detail.component';

import {CourseService} from '@app/core/_services/course.service';
import {CourseComponent} from '@app/course/list/course.component';

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
    CourseComponent,
    CourseFormComponent,
    CourseDetailComponent
  ],
  providers: [
    CourseService
  ]
})

export class CourseModule { }
