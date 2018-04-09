import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './home/dashboard/dashboard.component';

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

]);
