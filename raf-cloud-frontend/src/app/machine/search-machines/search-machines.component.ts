import { Component } from '@angular/core';
import { MachineService } from '../machine.service';
import { MachineStatus } from '../machine.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-machines',
  standalone: true,
  imports: [],
  templateUrl: './search-machines.component.html',
  styleUrl: './search-machines.component.css',
})
export class SearchMachinesComponent {
  constructor(private router: Router, private machineService: MachineService) {}

  //Primer koliko je frontend glup, ovo mora da bi se enum vrednost bila prikazana kao string a ne kao broj u html-u, djubre klasnicno
  MachineStatus = MachineStatus;

  get machines() {
    return this.machineService.getMachinesForLoggedInUser();
  }

  get loggedInUser(){
    return this.machineService.loggedInUser();
  }

  getUserNameForMachine(userId: string): string {
    return this.machineService.getUserNameForMachine(userId);
  }

  onNewMachine() {
    this.router.navigate(['/new-machine']);
  }
}
