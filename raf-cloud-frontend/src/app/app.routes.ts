import { Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { AddNewUserComponent } from './user/add-new-user/add-new-user.component';
import { HomeComponent } from './home/home.component';
import { SearchMachinesComponent } from './machine/search-machines/search-machines.component';
import { AddNewMachineComponent } from './machine/add-new-machine/add-new-machine.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'new-user', component: AddNewUserComponent},
  { path: 'machines', component: SearchMachinesComponent},
  { path: 'new-machine', component: AddNewMachineComponent },
];
