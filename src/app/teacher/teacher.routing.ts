import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './list/teacher.component';
import { TeacherFormComponent } from './form/teacher-form.component';
import { TeacherDetailComponent } from './detail/teacher-detail.component';

import { AuthGuard } from '@app/core';

export const TeacherRouting = RouterModule.forChild([
    {
        path: 'teachers',
        children: [
            { path: '', canActivate: [AuthGuard],component: TeacherComponent },
            { path: 'add', canActivate: [AuthGuard],component: TeacherFormComponent },
            { path: 'edit/:id', canActivate: [AuthGuard],component: TeacherFormComponent },
            { path: 'details/:id', canActivate: [AuthGuard],component: TeacherDetailComponent }
        ]
    }
])