import { Routes, RouterModule } from '@angular/router';

import { CareerComponent } from './list/career.component';
import { CareerFormComponent } from './form/career-form.component';
import { CareerDetailComponent } from './detail/career-detail.component';

import { AuthGuard } from '@app/core';

export const CareerRouting = RouterModule.forChild([
    {
        path: 'careers',
        children: [
            { path: '', canActivate: [AuthGuard], component: CareerComponent },
            { path: 'add', canActivate: [AuthGuard],component: CareerFormComponent },
            { path: 'edit/:id', canActivate: [AuthGuard],component: CareerFormComponent },
            { path: 'details/:id', canActivate: [AuthGuard],component: CareerDetailComponent }
        ]
    }
])