import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { type User } from '../user.model';
import { type Machine } from 'src/app/machine/machine.model';

@Component({
  selector: 'app-edit-user-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.css'],
})
export class EditUserDataComponent {
  @Input({ required: true }) selectedUser!: User;
  @Output() closeDialog = new EventEmitter<void>();

  name!: string;
  email!: string;
  password!: string;
  surname!: string;
  newUserPermission!: boolean;
  readUserPermission!: boolean;
  updateUserPermission!: boolean;
  deleteUserPermission!: boolean;

  searchMachinePermission: boolean = false;
  turnOnMachinePermission: boolean = false;
  turnOffMachinePermission: boolean = false;
  restartMachinePermission: boolean = false;
  createMachinePermission: boolean = false;
  deleteMachinePermission: boolean = false;
  
  constructor(private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedUser'] && this.selectedUser) {
      this.name = this.selectedUser.name;
      this.email = this.selectedUser.email;
      this.password = this.selectedUser.password;
      this.surname = this.selectedUser.surname;

      this.newUserPermission = this.selectedUser.newUserPermission;
      this.readUserPermission = this.selectedUser.readUserPermission;
      this.updateUserPermission = this.selectedUser.updateUserPermission;
      this.deleteUserPermission = this.selectedUser.deleteUserPermission;

      this.searchMachinePermission = this.selectedUser.searchMachinePermission;
      this.turnOnMachinePermission = this.selectedUser.turnOnMachinePermission;
      this.turnOffMachinePermission = this.selectedUser.turnOffMachinePermission;
      this.restartMachinePermission = this.selectedUser.restartMachinePermission;
      this.createMachinePermission = this.selectedUser.createMachinePermission;
      this.deleteMachinePermission = this.selectedUser.deleteMachinePermission;
    }
  }

  onSubmit() {
    this.authService.updateUser(
      this.selectedUser.id,
      this.name,
      this.surname,
      this.email,
      this.password,
      this.newUserPermission,
      this.readUserPermission,
      this.updateUserPermission,
      this.deleteUserPermission,
      this.searchMachinePermission,
      this.turnOnMachinePermission,
      this.turnOffMachinePermission,
      this.restartMachinePermission,
      this.createMachinePermission,
      this.deleteMachinePermission
    );
    this.close();
  }

  close() {
    this.closeDialog.emit();
  }
}
