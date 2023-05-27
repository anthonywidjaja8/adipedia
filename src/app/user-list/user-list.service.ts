import { EventEmitter } from "@angular/core";
import { User } from "./user.model";

export class UserListService {
    usersChanged = new EventEmitter<User[]>();
    private users: User[] = [
        new User('anthony@gmail.com', 'Admin', 'Active'),
        new User('adi@gmail.com', 'User', 'Inactive')
    ]

    getUsers() {
        return this.users.slice();
    }

    addUsers(user: User) {
        this.users.push(user);
        this.usersChanged.emit(this.users.slice()); 
    }
}