import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Machine } from '../machine.model';
import { MachineService } from '../machine.service';
import { Operation } from '../error.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-machine-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './schedule-machine-operation.component.html',
  styleUrl: './schedule-machine-operation.component.css'
})
export class ScheduleMachineOperationComponent {

  Operation = Operation;

  @Input({required:true}) machine! : Machine;
  @Output() closeDialog = new EventEmitter<void>();

  selectedOperation: Operation = Operation.TURN_ON;
  scheduleDate: string = '';
  scheduleTime: string = '';
  minDate: string = '';

  constructor(private machineService: MachineService){
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');

    this.minDate = today.toISOString().split('T')[0];
    this.scheduleDate = this.minDate;
    this.scheduleTime = `${hours}:${minutes}`;
  }

  onSubmit(){
    this.machineService.scheduleOperation(this.machine.id, this.selectedOperation, new Date(`${this.scheduleDate}T${this.scheduleTime}`))
    this.close();  
  }
  
  close(){
    this.closeDialog.emit();
  }
}