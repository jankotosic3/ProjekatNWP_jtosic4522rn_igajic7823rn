import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { User } from '../user.model';

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
      this.deleteUserPermission
    );
    this.close();
  }

  close() {
    this.closeDialog.emit();
  }
}
