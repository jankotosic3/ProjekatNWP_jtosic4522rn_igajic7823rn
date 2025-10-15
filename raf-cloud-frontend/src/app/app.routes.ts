import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

export const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'new-user', component: AddNewUserComponent}
];
