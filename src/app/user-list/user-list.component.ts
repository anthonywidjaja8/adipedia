import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User('anthony@gmail.com', 'Admin', 'Active'),
    new User('adi@gmail.com', 'User', 'Inactive')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(user: User) {
    this.users.push(user);
  }

}
