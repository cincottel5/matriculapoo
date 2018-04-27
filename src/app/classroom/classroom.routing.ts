import { Routes, RouterModule } from '@angular/router';

import { ClassroomComponent } from './list/classroom.component';
import { ClassroomFormComponent } from './form/classroom-form.component';
import { ClassroomDetailComponent } from './detail/classroom-detail.component';

import { AuthGuard } from '@app/core';

export const ClassroomRouting = RouterModule.forChild([
    {
        path: 'classrooms',
        children: [
            { path: '', canActivate: [AuthGuard],component: ClassroomComponent },
            { path: 'add', canActivate: [AuthGuard],component: ClassroomFormComponent },
            { path: 'edit/:id', canActivate: [AuthGuard],component: ClassroomFormComponent },
            { path: 'details/:id', canActivate: [AuthGuard],component: ClassroomDetailComponent }
        ]
    }
])