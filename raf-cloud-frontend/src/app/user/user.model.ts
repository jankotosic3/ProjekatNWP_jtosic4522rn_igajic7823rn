import { Machine } from "../machine/machine.model";

export interface User {
  id: string
  name: string;
  surname: string;
  email: string;
  password: string;

  newUserPermission: boolean;
  readUserPermission: boolean;
  updateUserPermission: boolean;
  deleteUserPermission: boolean;

  searchMachinePermission: boolean;
  turnOnMachinePermission: boolean;
  turnOffMachinePermission: boolean;
  restartMachinePermission: boolean;
  createMachinePermission: boolean;
  deleteMachinePermission: boolean;

  userType: UserType;
}

export enum UserType {
  ADMIN = 'admin',
  REGULAR = 'regular'
}
