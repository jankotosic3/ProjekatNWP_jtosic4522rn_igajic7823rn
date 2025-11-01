import { Injectable } from '@angular/core';
import { DUMMY_MACHINES } from '../dummy-machines';
import { MachineStatus, type Machine } from './machine.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Operation, type Error } from './error.model';
import { UserType } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  machines: Machine[] = DUMMY_MACHINES;

  errors: Error[] = [];

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
    machine.status = MachineStatus.STARTING;

    setTimeout(() => {
      machine.active = true;
      machine.status = MachineStatus.IN_USE;
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
    machine.status = MachineStatus.STOPPING;

    setTimeout(() => {
      machine.active = false;
      machine.status = MachineStatus.FREE;
      console.log('Masina ' + machine.machineName + ' je ugasena!');
    }, 10000);
  }

  restart(id: number) {
    const machine = this.getMachineById(id);
    if (!machine) return;

    if (!machine.active) {
      console.log(
        'Masina ' +
          machine.machineName +
          ' nije upaljena i ne moze biti restartovana!'
      );
      return;
    }

    machine.status = MachineStatus.RESTARTING;

    setTimeout(() => {
      machine.active = false;
    }, 5000);

    setTimeout(() => {
      machine.active = true;
      machine.status = MachineStatus.IN_USE;
      console.log(
        'Masina ' + machine.machineName + ' je uspesno restartovana!'
      );
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

  getMachineNameFromID(machineId: number): string {
    for (let machine of this.machines) {
      if (machine.id === machineId) return machine.machineName;
    }
    return '';
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

  scheduleOperation(
    machineId: number,
    operation: Operation,
    scheduledFor: Date
  ) {
    const machine = this.getMachineById(machineId);
    if (!machine) {
      console.log('Machine not found');
      return;
    }

    const now = new Date();
    const delay = scheduledFor.getTime() - now.getTime();

    if (delay < 0) {
      console.log('Cannot schedule operation in the past');
      return;
    }

    setTimeout(() => {
      console.log(
        'Executing scheduled operation: ' +
          Operation[operation] +
          ' on ' +
          machine.machineName
      );

      switch (operation) {
        case Operation.TURN_ON:
          this.turnOn(machineId);
          break;
        case Operation.TURN_OFF:
          this.turnOff(machineId);
          break;
        case Operation.RESTART:
          this.restart(machineId);
          break;
      }
    }, delay);

    console.log(
      'Operation scheduled for ' +
        machine.machineName +
        ' at ' +
        scheduledFor.toLocaleString()
    );
  }

  getErrorsForLoggedInUser(): Error[] {
    if (!this.loggedInUser) return [];

    if (this.loggedInUser()?.userType === UserType.ADMIN) {
      return this.errors;
    }

    return this.errors.filter(
      (error) => error.userId === this.loggedInUser()?.id
    );
  }
}
