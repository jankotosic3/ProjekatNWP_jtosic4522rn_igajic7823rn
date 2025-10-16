import { Component } from '@angular/core';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-search-machines',
  standalone: true,
  imports: [],
  templateUrl: './search-machines.component.html',
  styleUrl: './search-machines.component.css'
})
export class SearchMachinesComponent {
  constructor(private machineService: MachineService) {}
  
}
