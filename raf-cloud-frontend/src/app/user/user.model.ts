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
}
