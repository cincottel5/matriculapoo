import { Routes, RouterModule } from '@angular/router';

import { EnrollmentComponent } from './list/enrollment.component';
import { EnrollmentFormComponent } from './form/enrollment-form.component';
import { EnrollmentDetailComponent } from './detail/enrollment-detail.component';

import { AuthGuard } from '@app/core';

export const EnrollmentRouting = RouterModule.forChild([
    {
        path: 'enrollments',
        children: [
            { path: '', canActivate: [AuthGuard], component: EnrollmentComponent },
            { path: 'add', canActivate: [AuthGuard], component: EnrollmentFormComponent },
            { path: 'edit/:id', canActivate: [AuthGuard],component: EnrollmentFormComponent },
            { path: 'details/:id', canActivate: [AuthGuard], component: EnrollmentDetailComponent }
        ]
    }
])