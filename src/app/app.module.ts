import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CoreModule } from '@app/core';

import { HomeModule } from './home/home.module';
import { HomeRouting } from './home/home.routing';

import { ClassroomModule } from './classroom/classroom.module';
import { ClassroomRouting } from './classroom/classroom.routing';

import { TeacherModule } from './teacher/teacher.module';
import { TeacherRouting } from './teacher/teacher.routing';

import { CareerModule } from './career/career.module';
import { CareerRouting } from './career/career.routing';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routing';
import {CourseService} from '@app/core/_services/course.service';
import {CourseModule} from '@app/course/course.module';
import {CourseRouting} from '@app/course/course.routing';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    HomeModule,
    HomeRouting,
    ClassroomModule,
    ClassroomRouting,
    CourseModule,
    CourseRouting,
    TeacherModule,
    TeacherRouting,
    CareerModule,
    CareerRouting,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
