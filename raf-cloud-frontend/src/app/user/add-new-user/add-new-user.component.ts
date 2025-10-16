import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { type Machine } from 'src/app/machine/machine.model';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css',
})
export class AddNewUserComponent {
  constructor(private authService: AuthService) {}

  name: string = '';
  email: string = '';
  password: string = '';
  surname: string = '';
  newUserPermission: boolean = false;
  readUserPermission: boolean = false;
  updateUserPermission: boolean = false;
  deleteUserPermission: boolean = false;
  createdMachines: Machine[] = [];
  searchMachinePermission: boolean = false;
  turnOnMachinePermission: boolean = false;
  turnOffMachinePermission: boolean = false;
  restartMachinePermission: boolean = false;
  createMachinePermission: boolean = false;
  deleteMachinePermission: boolean = false;

  onSubmit() {
    this.authService.addNewUser(
      this.name,
      this.surname,
      this.email,
      this.password,
      this.newUserPermission,
      this.readUserPermission,
      this.updateUserPermission,
      this.deleteUserPermission,
      this.createdMachines,
      this.searchMachinePermission,
      this.turnOnMachinePermission,
      this.turnOffMachinePermission,
      this.restartMachinePermission,
      this.createMachinePermission,
      this.deleteMachinePermission
    );
  }
}
