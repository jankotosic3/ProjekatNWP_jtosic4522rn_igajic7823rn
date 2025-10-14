import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: string = "";
  password: string = "";

  onSubmit() {
    console.log("email: " + this.email + "\npassword: " + this.password);
  }
}
