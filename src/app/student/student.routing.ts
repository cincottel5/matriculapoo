import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './list/student.component';
import { StudentFormComponent } from './form/student-form.component';
import { StudentDetailComponent } from './detail/student-detail.component';

export const StudentRouting = RouterModule.forChild([
    {
        path: 'students',
        children: [
            { path: '', component: StudentComponent },
            { path: 'add', component: StudentFormComponent },
            { path: 'edit/:id', component: StudentFormComponent },
            { path: 'details/:id', component: StudentDetailComponent }
        ]
    }
])