import { Component } from '@angular/core';
import { MachineService } from '../machine.service';
import { Machine, MachineStatus } from '../machine.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScheduleMachineOperationComponent } from '../schedule-machine-operation/schedule-machine-operation.component';

@Component({
  selector: 'app-search-machines',
  standalone: true,
  imports: [FormsModule, ScheduleMachineOperationComponent],
  templateUrl: './search-machines.component.html',
  styleUrl: './search-machines.component.css',
})
export class SearchMachinesComponent {
  machines!: Machine[];

  showScheduleDialog = false;
  schedulingOperationMachine: any = null;

  constructor(private router: Router, private machineService: MachineService) {
    this.machines = this.machineService.getMachinesForLoggedInUser();
  }

  searchName?: string;
  searchStatus: MachineStatus | null = null;

  //Primer koliko je frontend glup, ovo mora da bi se enum vrednost bila prikazana kao string a ne kao broj u html-u, djubre klasnicno
  MachineStatus = MachineStatus;

  get loggedInUser() {
    return this.machineService.loggedInUser();
  }

  getUserNameForMachine(userId: string): string {
    return this.machineService.getUserNameForMachine(userId);
  }

  onNewMachine() {
    this.router.navigate(['/new-machine']);
  }

  onSearch() {
    this.machines = this.machineService.search(
      this.searchName,
      this.searchStatus
    );
  }

  onTurnOnMachine(machine: Machine) {
    this.machineService.turnOn(machine.id);
  }

  onTurnOffMachine(machine: Machine) {
    this.machineService.turnOff(machine.id);
  }

  onRestartMachine(machine: Machine) {
    this.machineService.restart(machine.id);
  }

  onShowScheduleDialog(machine: Machine) {
    this.showScheduleDialog = true;
    this.schedulingOperationMachine = machine;
  }
  onCloseScheduleDialog() {
    this.showScheduleDialog = false;
    this.schedulingOperationMachine = null;
  }
}
