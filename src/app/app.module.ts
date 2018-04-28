import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';

import { HomeModule } from './home/home.module';
import { HomeRouting } from './home/home.routing';

import { ClassroomModule } from './classroom/classroom.module';
import { ClassroomRouting } from './classroom/classroom.routing';

import { TeacherModule } from './teacher/teacher.module';
import { TeacherRouting } from './teacher/teacher.routing';

import { CareerModule } from './career/career.module';
import { CareerRouting } from './career/career.routing';

import { StudentModule } from './student/student.module';
import { StudentRouting } from './student/student.routing';

import { EnrollmentModule } from './enrollment/enrollment.module';
import { EnrollmentRouting } from './enrollment/enrollment.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {UserModule} from '@app/user/user.module';
import {UserRouting} from '@app/user/user.routing';

import {CourseModule} from '@app/course/course.module';
import {CourseRouting} from '@app/course/course.routing';

import { AppRoutes } from './app.routing';

import { AuthGuard } from '@app/core';
import {ContactModule} from '@app/contact/contact.module';
import {ContactRouting} from '@app/contact/contact.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    HomeModule,
    HomeRouting,
    ClassroomModule,
    ClassroomRouting,
    UserModule,
    UserRouting,
    TeacherModule,
    TeacherRouting,
    CareerModule,
    CareerRouting,
    ContactModule,
    ContactRouting,
    StudentModule,
    StudentRouting,
    CourseModule,
    CourseRouting,
    EnrollmentModule,
    EnrollmentRouting,
    AppRoutes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
