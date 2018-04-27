import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CareerComponent } from './list/career.component';
import { CareerFormComponent } from './form/career-form.component';
import { CareerDetailComponent } from './detail/career-detail.component';

import { CareerService } from '@app/core';
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
    CareerComponent,
    CareerFormComponent,
    CareerDetailComponent
  ],
  providers: [
    CareerService, 
    AuthGuard
  ]
})

export class CareerModule { }
