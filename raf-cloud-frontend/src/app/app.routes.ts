import { Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { AddNewUserComponent } from './user/add-new-user/add-new-user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'new-user', component: AddNewUserComponent}
];
