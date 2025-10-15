import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user-login/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  username: string = 'Korisnik';

  get userLoggedIn(): User {
    return this.authService.userLoggedIn!;
  }
}
