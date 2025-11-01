export interface Error{
    errorId: number;
    userId: string;
    machineId: number;
    date: Date;
    operation: Operation;
    errorMessage: string
}

export enum Operation{
    TURN_ON,
    TURN_OFF,
    RESTART
}