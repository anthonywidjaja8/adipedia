import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User('anthony@gmail.com', 'Admin', true, true),
    new User('adi@gmail.com', 'User', true, true)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
