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

import { AppRoutes } from './app.routing';

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
    TeacherModule,
    TeacherRouting,
    CareerModule,
    CareerRouting,
    StudentModule,
    StudentRouting,
    EnrollmentModule,
    EnrollmentRouting,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
