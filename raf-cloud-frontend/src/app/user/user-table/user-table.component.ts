import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { EditUserDataComponent } from '../edit-user-data/edit-user-data.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [EditUserDataComponent, DeleteUserComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  constructor(private authService: AuthService, private router: Router) {}

  selectedUser: any = null;

  showDeleteUserDialog = false;

  userToDelete: any = null;

  onNewUser(){
    this.router.navigate(['/new-user']);
  }
  get users(){
    return this.authService.users;
  }

  get userLoggedIn(){
    return this.authService.userLoggedIn;
  }
  
  onRowClick(user: any){
    this.selectedUser = user; 
  }

  closeUpdateUserDialog(){
    this.selectedUser = null;
  }

  openDeleteUserDialog(user: any) {
    this.userToDelete = user;
    this.showDeleteUserDialog = true;
  }
  closeDeleteUserDialog() {
    this.showDeleteUserDialog = false;
    this.userToDelete = null;
  }
}
