import { Component } from '@angular/core';
import { MachineService } from '../machine.service';
import { Machine, MachineStatus } from '../machine.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-machines',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-machines.component.html',
  styleUrl: './search-machines.component.css',
})
export class SearchMachinesComponent {
  machines!: Machine[];
  
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
    this.machines = this.machineService.search(this.searchName, this.searchStatus);
  }
}
