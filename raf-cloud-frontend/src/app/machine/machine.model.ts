export interface Machine {
    id: number;
    status: MachineStatus;
    creatorId: string;
    active: boolean;
}

export enum MachineStatus {
    Free,
    InUse
}