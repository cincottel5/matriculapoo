import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';
import {UserComponent} from '@app/user/list/user.component';
import {UserFormComponent} from '@app/user/form/user-form.component';
import {UserDetailComponent} from '@app/user/detail/user-detail.component';

export const UserRouting = RouterModule.forChild([
  {
    path: 'users',
    children: [
      { path: '', canActivate: [AuthGuard], component: UserComponent },
      { path: 'add', canActivate: [AuthGuard], component: UserFormComponent },
      { path: 'edit/:id', canActivate: [AuthGuard], component: UserFormComponent },
      { path: 'details/:id', canActivate: [AuthGuard], component: UserDetailComponent }
    ]
  }
]);
