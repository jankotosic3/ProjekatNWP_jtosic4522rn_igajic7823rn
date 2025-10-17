import { Component } from '@angular/core';
import { MachineService } from '../machine.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-machine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-machine.component.html',
  styleUrl: './add-new-machine.component.css',
})
export class AddNewMachineComponent {
  constructor(private machineService: MachineService) {};

  machineName: string = '';

  onSubmit() {
    this.machineService.createMachine(this.machineName);
  }
}
