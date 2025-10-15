import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn = false;
}
