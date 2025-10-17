import { Machine, MachineStatus } from "./machine/machine.model";

export const DUMMY_MACHINES: Machine[] = [
  {
    id: 0,
    machineName: 'Alpha-01',
    status: MachineStatus.Free,
    creatorId: '0', 
    active: true,
  },
  {
    id: 1,
    machineName: 'Beta-02',
    status: MachineStatus.InUse,
    creatorId: '1', 
    active: true,
  },
  {
    id: 2,
    machineName: 'Gamma-03',
    status: MachineStatus.Free,
    creatorId: '2', 
    active: true,
  },
  {
    id: 3,
    machineName: 'Delta-04',
    status: MachineStatus.InUse,
    creatorId: '4', 
    active: true,
  },
  {
    id: 4,
    machineName: 'Epsilon-05',
    status: MachineStatus.Free,
    creatorId: '6',
    active: false,
  },
  {
    id: 5,
    machineName: 'Zeta-06',
    status: MachineStatus.Free,
    creatorId: '8', 
    active: true,
  },
  {
    id: 6,
    machineName: 'Eta-07',
    status: MachineStatus.InUse,
    creatorId: '9', 
    active: true,
  },
  {
    id: 7,
    machineName: 'Theta-08',
    status: MachineStatus.Free,
    creatorId: '3',
    active: false,
  },
  {
    id: 8,
    machineName: 'Iota-09',
    status: MachineStatus.InUse,
    creatorId: '5',
    active: true,
  },
  {
    id: 9,
    machineName: 'Kappa-10',
    status: MachineStatus.Free,
    creatorId: '7',
    active: true,
  },
];
