import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './list/teacher.component';
import { TeacherFormComponent } from './form/teacher-form.component';
import { TeacherDetailComponent } from './detail/teacher-detail.component';

export const TeacherRouting = RouterModule.forChild([
    {
        path: 'teachers',
        children: [
            { path: '', component: TeacherComponent },
            { path: 'add', component: TeacherFormComponent },
            { path: 'edit/:id', component: TeacherFormComponent },
            { path: 'details/:id', component: TeacherDetailComponent }
        ]
    }
])