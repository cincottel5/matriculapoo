import { Routes, RouterModule } from '@angular/router';

import { EnrollmentComponent } from './list/enrollment.component';
import { EnrollmentFormComponent } from './form/enrollment-form.component';
import { EnrollmentDetailComponent } from './detail/enrollment-detail.component';

export const EnrollmentRouting = RouterModule.forChild([
    {
        path: 'enrollments',
        children: [
            { path: '', component: EnrollmentComponent },
            { path: 'add', component: EnrollmentFormComponent },
            { path: 'edit/:id', component: EnrollmentFormComponent },
            { path: 'details/:id', component: EnrollmentDetailComponent }
        ]
    }
])