import { Routes, RouterModule } from '@angular/router';

import {CourseComponent} from './list/course.component';
import { CourseFormComponent} from './form/course-form.component';
import { CourseDetailComponent} from './detail/course-detail.component';

export const CourseRouting = RouterModule.forChild([
    {
        path: 'courses',
        children: [
            { path: '', component: CourseComponent },
            { path: 'add', component: CourseFormComponent },
            { path: 'edit/:id', component: CourseFormComponent },
            { path: 'details/:id', component: CourseDetailComponent }
        ]
    }
])
