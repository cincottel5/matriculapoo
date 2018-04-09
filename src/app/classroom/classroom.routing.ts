import { Routes, RouterModule } from '@angular/router';

import { ClassroomComponent } from './list/classroom.component';
import { ClassroomFormComponent } from './form/classroom-form.component';
import { ClassroomDetailComponent } from './detail/classroom-detail.component';

export const ClassroomRouting = RouterModule.forChild([
    {
        path: 'classrooms',
        children: [
            { path: '', component: ClassroomComponent },
            { path: 'add', component: ClassroomFormComponent },
            { path: 'edit/:id', component: ClassroomFormComponent },
            { path: 'details/:id', component: ClassroomDetailComponent }
        ]
    }
])