import { Subject } from "rxjs";
import { User } from "./user.model";

export class UserListService {
    userChanged = new Subject<User[]>();
    private users: User[] = [
        new User('anthony@gmail.com', 'Admin', 'Active'),
        new User('adi@gmail.com', 'User', 'Inactive')
    ]

    getUsers() {
        return this.users.slice();
    }

    addUser(user: User) {
        this.users.push(user);
        this.userChanged.next(this.users.slice()); 
    }
}