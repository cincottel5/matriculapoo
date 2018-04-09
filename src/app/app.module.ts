import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CoreModule } from '@app/core';

import { HomeModule } from './home/home.module';
import { HomeRouting } from './home/home.routing';

import { ClassroomModule } from './classroom/classroom.module';
import { ClassroomRouting } from './classroom/classroom.routing';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routing';



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
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
