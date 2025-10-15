import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input({ required: true }) userLoggedIn!: boolean;
  username: string = 'Korisnik';

  onUserLoginChange() {
    this.userLoggedIn = true;
  }
}
