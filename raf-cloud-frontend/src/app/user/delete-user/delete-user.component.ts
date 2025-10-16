import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth.service';
import { type User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Input({ required: true }) user!: User;
  @Output() closeDialog = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  deleteUser() {
    this.authService.deleteUser(this.user.id);
    this.close(); // automatski zatvori modal
  }

  close() {
    this.closeDialog.emit();
  }
}
