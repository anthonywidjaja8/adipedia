import { Subject } from "rxjs";
import { User } from "./user.model";

export class UserListService {
    usersChanged = new Subject<User[]>();
    startedEditing = new Subject<number>();
    private users: User[] = [
        new User('anthony@gmail.com', 'Seller', 'Active'),
        new User('adi@gmail.com', 'Admin', 'Inactive')
    ]

    getUsers() {
        return this.users.slice();
    }

    getUser(index: number) {
        return this.users[index];
    }

    addUser(user: User) {
        this.users.push(user);
        this.usersChanged.next(this.users.slice()); 
    }

    updateUser(index: number, newUser: User) {
        this.users[index] = newUser;
        this.usersChanged.next(this.users.slice());
    }

    deleteUser(index: number) {
        this.users.splice(index, 1);
        this.usersChanged.next(this.users.slice());
    }
    
}