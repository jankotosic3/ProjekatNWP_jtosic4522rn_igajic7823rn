import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserTableComponent } from './user-table/user-table.component';

export const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-table', component: UserTableComponent },
];
