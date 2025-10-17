import { Injectable } from "@angular/core";
import { DUMMY_MACHINES } from "../dummy-machines";
import { type Machine } from "./machine.model";
import { AuthService } from "../auth.service";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MachineService { 
    machines: Machine[] = DUMMY_MACHINES;
    constructor(private router: Router,private authService: AuthService) {}

    search(){
        
    }
    turnOn(){
        //TO DO
    }
    turnOff(){
        //TO DO
    }
    restart(){ //valjda ovako (nisam citao al pretpostavljam)
        this.turnOff();
        this.turnOn();
    }

    createMachine(machineName: string){
        this.machines.push({
            id: this.machines.length,
            machineName: machineName,
            status: 0,
            creatorId: this.authService.userLoggedIn?.id || '',
            active: false
        });

        this.router.navigate(['/machines']);
    }
    deleteMachine(machineId: number){
        this.machines.filter(machine => machine.id !== machineId);
    }

    returnMachinesForLoggedInUser(): Machine[] {
        return this.machines.filter(machine => machine.creatorId === this.authService.userLoggedIn?.id);
    }
    
    getUserNameForMachine(userId: string): string {
        return this.authService.getUserNameById(userId);
    }
}