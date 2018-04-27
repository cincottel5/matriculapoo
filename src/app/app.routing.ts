import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

]);
