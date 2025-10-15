import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css'
})
export class AddNewUserComponent {

  constructor(private authService: AuthService) {}

  name: string = '';
  email: string = '';
  password: string = '';
  surname: string = '';
  
   onSubmit(){
  //    this.authService.addNewUser(this.name, this.surname, this.email, this.password)
   }
}
