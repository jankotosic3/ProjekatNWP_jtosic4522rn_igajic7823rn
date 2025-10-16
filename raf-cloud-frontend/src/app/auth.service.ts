import { Injectable } from "@angular/core";
import { type User } from "./user-login/user.model";
import { DUMMY_USERS } from "./dummy-users";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {    
    constructor(private router: Router) {}

    users = DUMMY_USERS;
    userLoggedIn: User | null = null;

    userLogin(email: string, password: string) : boolean{
        for (let user of this.users) {
            if (user.email === email && user.password === password) {
                this.userLoggedIn = user;
                return true;
            }        
        }
        return false;
    }

    userLogout() {
        this.userLoggedIn = null;
    }

    addNewUser(name: string, surname: string, email: string, password: string) {
        this.users.push({
            id: (this.users.length).toString(),
            name: name,
            surname: surname,
            email: email,
            password: password,
            permissions: []
        });
        this.router.navigate(['/user-table']);
    }
}
