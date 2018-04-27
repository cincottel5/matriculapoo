import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ClassroomComponent } from './list/classroom.component';
import { ClassroomFormComponent } from './form/classroom-form.component';
import { ClassroomDetailComponent } from './detail/classroom-detail.component';

import { ClassroomService } from '@app/core';
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
    ClassroomComponent,
    ClassroomFormComponent,
    ClassroomDetailComponent
  ],
  providers: [
    ClassroomService,
    AuthGuard
  ]
})

export class ClassroomModule { }
