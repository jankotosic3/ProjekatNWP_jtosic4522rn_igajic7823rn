import { Injectable } from '@angular/core';
import { type User } from './user/user.model';
import { DUMMY_USERS } from './dummy-users';
import { Router } from '@angular/router';
import { type Machine } from './machine/machine.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  users: User[] = DUMMY_USERS;
  userLoggedIn: User | null = null;
  isUserLoggedIn = false;

  userLogin(email: string, password: string): boolean {
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        this.userLoggedIn = user;
        this.isUserLoggedIn = true;
        return true;
      }
    }
    return false;
  }

  userLogout() {
    this.userLoggedIn = null;
    this.isUserLoggedIn = false;
    this.router.navigate(['']);
  }

  addNewUser(
    name: string,
    surname: string,
    email: string,
    password: string,
    newUserPermission: boolean,
    readUserPermission: boolean,
    updateUserPermission: boolean,
    deleteUserPermission: boolean,
    createdMachines: Machine[],
    searchMachinePermission: boolean,
    turnOnMachinePermission: boolean,
    turnOffMachinePermission: boolean,
    restartMachinePermission: boolean,
    createMachinePermission: boolean,
    deleteMachinePermission: boolean
  ) {
    this.users.push({
      id: this.users.length.toString(),
      name: name,
      surname: surname,
      email: email,
      password: password,
      newUserPermission: newUserPermission,
      readUserPermission: readUserPermission,
      updateUserPermission: updateUserPermission,
      deleteUserPermission: deleteUserPermission,
      createdMachines: createdMachines,
      searchMachinePermission: searchMachinePermission,
      turnOnMachinePermission: turnOnMachinePermission,
      turnOffMachinePermission: turnOffMachinePermission,
      restartMachinePermission: restartMachinePermission,
      createMachinePermission: createMachinePermission,
      deleteMachinePermission: deleteMachinePermission,
    });
    this.router.navigate(['/user-table']);
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  updateUser(
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,

    newUserPermission: boolean,
    readUserPermission: boolean,
    updateUserPermission: boolean,
    deleteUserPermission: boolean,
  
    createdMachines: Machine[],
    searchMachinePermission: boolean,
    turnOnMachinePermission: boolean,
    turnOffMachinePermission: boolean,
    restartMachinePermission: boolean,
    createMachinePermission: boolean,
    deleteMachinePermission: boolean
  ) {
    for (let user of this.users) {
      if (user.id === id) {
        user.name = name;
        user.surname = surname;
        user.email = email;
        user.password = password;
        
        user.newUserPermission = newUserPermission;
        user.readUserPermission = readUserPermission;
        user.updateUserPermission = updateUserPermission;
        user.deleteUserPermission = deleteUserPermission;

        user.createdMachines = createdMachines;
        user.searchMachinePermission = searchMachinePermission;
        user.turnOnMachinePermission = turnOnMachinePermission;
        user.turnOffMachinePermission = turnOffMachinePermission;
        user.restartMachinePermission = restartMachinePermission;
        user.createMachinePermission = createMachinePermission;
        user.deleteMachinePermission = deleteMachinePermission;
        break;
      }
    }
  }
}
