export interface Machine {
    id: number;
    machineName: string;
    status: MachineStatus;
    creatorId: string;
    active: boolean;
}

export enum MachineStatus {
    Free,
    InUse
}