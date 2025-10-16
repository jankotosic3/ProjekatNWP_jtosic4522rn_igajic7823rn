import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { type User } from '../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  get userLoggedIn(): User | null {
    return this.authService.userLoggedIn!;
  }

  logout() {
    this.authService.userLogout();
  }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn;
  }
}
