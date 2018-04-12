import { Routes, RouterModule } from '@angular/router';

import { CareerComponent } from './list/career.component';
import { CareerFormComponent } from './form/career-form.component';
import { CareerDetailComponent } from './detail/career-detail.component';

export const CareerRouting = RouterModule.forChild([
    {
        path: 'careers',
        children: [
            { path: '', component: CareerComponent },
            { path: 'add', component: CareerFormComponent },
            { path: 'edit/:id', component: CareerFormComponent },
            { path: 'details/:id', component: CareerDetailComponent }
        ]
    }
])