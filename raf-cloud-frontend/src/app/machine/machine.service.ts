import { Injectable } from "@angular/core";
import { DUMMY_MACHINES } from "../dummy-machines";
import { type Machine } from "./machine.model";

@Injectable({
  providedIn: 'root'
})
export class MachineService { 
    machines: Machine[] = DUMMY_MACHINES;
    search(){
        
    }
    turnOn(){
        //TO DO
    }
    turnOff(){
        //TO DO
    }
    restart(){
        //TO DO
    }
    createMachine(){
        //TO DO
    }
    deleteMachine(){
        //TO DO
    }
}