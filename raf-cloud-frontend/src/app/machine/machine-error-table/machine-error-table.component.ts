import { Component } from '@angular/core';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-machine-error-table',
  standalone: true,
  imports: [],
  templateUrl: './machine-error-table.component.html',
  styleUrl: './machine-error-table.component.css',
})
export class MachineErrorTableComponent {
  constructor(private machineSerivce: MachineService) {}

  getNumberOfUsersMachinePermissions() : number {
    const user = this.loggedInUser;
    let result = 0;

    if (user?.createMachinePermission) result++;
    if (user?.deleteMachinePermission) result++;
    if (user?.searchMachinePermission) result++;
    if (user?.turnOnMachinePermission) result++;
    if (user?.restartMachinePermission) result++;
    if (user?.turnOffMachinePermission) result++;

    return result;
  }

  get loggedInUser() {
    return this.machineSerivce.loggedInUser();
  }

  getMachineErrorsForUser(){
    
  }

}
