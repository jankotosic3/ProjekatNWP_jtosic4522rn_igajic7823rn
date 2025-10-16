import { Machine, MachineStatus } from "./machine/machine.model";

export const DUMMY_MACHINES = [
  {
    id: 0,
    status: MachineStatus.Free,
    creatorId: '0', // Admin
    active: true,
  },
  {
    id: 1,
    status: MachineStatus.InUse,
    creatorId: '1', // Marko
    active: true,
  },
  {
    id: 2,
    status: MachineStatus.Free,
    creatorId: '2', // Jelena
    active: true,
  },
  {
    id: 3,
    status: MachineStatus.InUse,
    creatorId: '4', // Ana
    active: true,
  },
  {
    id: 4,
    status: MachineStatus.Free,
    creatorId: '6', // Sara
    active: false,
  },
  {
    id: 5,
    status: MachineStatus.Free,
    creatorId: '8', // Teodora
    active: true,
  },
  {
    id: 6,
    status: MachineStatus.InUse,
    creatorId: '9', // Stefan
    active: true,
  },
  {
    id: 7,
    status: MachineStatus.Free,
    creatorId: '3', // Nikola
    active: false,
  },
  {
    id: 8,
    status: MachineStatus.InUse,
    creatorId: '5', // Milan
    active: true,
  },
  {
    id: 9,
    status: MachineStatus.Free,
    creatorId: '7', // Vuk
    active: true,
  },
];
