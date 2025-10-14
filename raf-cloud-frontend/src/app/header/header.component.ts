import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required: true}) userLoggedIn!: boolean;
  username: string = "Korisnik";

  onUserLoginChange() {
    this.userLoggedIn = true;
  }

}
