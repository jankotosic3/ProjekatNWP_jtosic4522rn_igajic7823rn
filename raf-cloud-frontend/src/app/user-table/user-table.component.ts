import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onNewUser(){
    this.router.navigate(['/new-user']);
  }
  get users(){
    return this.authService.users;
  }

  get userLoggedIn(){
    return this.authService.userLoggedIn;
  }

}
