import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './list/student.component';
import { StudentFormComponent } from './form/student-form.component';
import { StudentDetailComponent } from './detail/student-detail.component';
import { AuthGuard } from '@app/core';

export const StudentRouting = RouterModule.forChild([
    {
        path: 'students',
        children: [
            { path: '', canActivate: [AuthGuard],component: StudentComponent },
            { path: 'add', canActivate: [AuthGuard],component: StudentFormComponent },
            { path: 'edit/:id', canActivate: [AuthGuard],component: StudentFormComponent },
            { path: 'details/:id', canActivate: [AuthGuard],component: StudentDetailComponent }
        ]
    }
])