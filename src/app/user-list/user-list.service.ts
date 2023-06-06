import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserList } from "./user-list.model";

@Injectable()
export class UserListService {
    usersChanged = new Subject<UserList[]>();
    startedEditing = new Subject<number>();
    /*
    private users: User[] = [
        new User('shiro@gmail.com', 'Seller', 'Active'),
        new User('sora@gmail.com', 'Admin', 'Inactive')
    ]
    */
    private users: UserList[] = [];
    
    setUsers(users: UserList[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers() {
        return this.users.slice();
    }

    getUser(index: number) {
        return this.users[index];
    }
    /*
    addUser(user: User) {
        this.users.push(user);
        this.usersChanged.next(this.users.slice()); 
    }

    deleteUser(index: number) {
        this.users.splice(index, 1);
        this.usersChanged.next(this.users.slice());
    }
    */
    updateUser(index: number, newUser: UserList) {
        this.users[index] = newUser;
        this.usersChanged.next(this.users.slice());
    }
    
}