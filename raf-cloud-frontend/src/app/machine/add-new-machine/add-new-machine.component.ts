import { Component } from '@angular/core';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-add-new-machine',
  standalone: true,
  imports: [],
  templateUrl: './add-new-machine.component.html',
  styleUrl: './add-new-machine.component.css',
})
export class AddNewMachineComponent {
  constructor(private machineService: MachineService) {};

  onSubmit() {
    this.machineService.createMachine();
  }


}
