import { Injectable } from '@angular/core';
import { DUMMY_MACHINES } from '../dummy-machines';
import { MachineStatus, type Machine } from './machine.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  machines: Machine[] = DUMMY_MACHINES;
  constructor(private router: Router, private authService: AuthService) {}

  search(name?: string, status?: MachineStatus | null): Machine[] {
    return this.getMachinesForLoggedInUser().filter((machine) => {
      if (
        name &&
        !machine.machineName.toLowerCase().includes(name.toLowerCase())
      )
        return false;

      if (status !== null && status !== undefined && machine.status !== status)
        return false;

      return true;
    });
  }

  turnOn(id: number) {
    const machine = this.getMachineById(id);
    if (!machine) return;

    if (machine.active) {
      console.log('Masina ' + machine.machineName + ' nije ugasena!');
      return;
    }

    setTimeout(() => {
      machine.active = true;
      machine.status = MachineStatus.InUse;
      console.log('Masina ' + machine.machineName + ' je upaljena.');
    }, 10000);

  }

  turnOff(id: number) {
    const machine = this.getMachineById(id);
    if (!machine) return;

    if (!machine.active) {
      console.log('Masina ' + machine.machineName + ' nije upaljena!');
      return;
    }

    setTimeout(() => {
      machine.active = false;
      machine.status = MachineStatus.Free;
      console.log('Masina ' + machine.machineName + ' je ugasena!');
    }, 10000);

  }

  restart(id: number) {
    const machine = this.getMachineById(id);
    if (!machine) return;

    if (!machine.active) {
      console.log('Masina ' + machine.machineName + ' nije upaljena i ne moze biti restartovana!');
        return;
    }

    setTimeout(() => {
      machine.active = false;
      machine.status = MachineStatus.Free;
    }, 5000); 

    setTimeout(() => {
      machine.active = true;
      machine.status = MachineStatus.InUse;
      console.log('Masina ' + machine.machineName + ' je uspesno restartovana!');
    }, 5000);
  }

  createMachine(machineName: string) {
    this.machines.push({
      id: this.machines.length,
      machineName: machineName,
      status: 0,
      creatorId: this.authService.userLoggedIn?.id || '',
      active: false,
    });

    this.router.navigate(['/machines']);
  }
  deleteMachine(machineId: number) {
    for (let machine of this.machines) {
      if (machine.id === machineId) {
        if (machine.active) {
          return;
        }
      }
    }
    this.machines.filter((machine) => machine.id !== machineId);
  }

  getMachinesForLoggedInUser(): Machine[] {
    if (this.authService.userLoggedIn?.userType === 'admin') {
      return this.machines;
    }
    return this.machines.filter(
      (machine) => machine.creatorId === this.authService.userLoggedIn?.id
    );
  }

  returnMachinesForLoggedInUser(): Machine[] {
    return this.machines.filter(
      (machine) => machine.creatorId === this.authService.userLoggedIn?.id
    );
  }

  getUserNameForMachine(userId: string): string {
    return this.authService.getUserNameById(userId);
  }

  loggedInUser() {
    return this.authService.userLoggedIn;
  }

  getMachineById(id: number): Machine | null {
    for (let machine of this.machines) {
      if (machine.id === id) return machine;
    }
    return null;
  }
}
