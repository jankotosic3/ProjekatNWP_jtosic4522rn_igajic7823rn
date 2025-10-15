import { Injectable } from "@angular/core";
import { User } from "./user-login/user.model";
import { DUMMY_USERS } from "./dummy-users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {    
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
}
