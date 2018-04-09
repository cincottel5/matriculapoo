import { Router, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const HomeRouting = RouterModule.forChild([
    {
        path: 'dashboard',
        children: [
            { path: '', component: DashboardComponent }
        ]
    }
]);