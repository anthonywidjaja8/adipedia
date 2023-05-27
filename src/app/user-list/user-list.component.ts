import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.users = this.userListService.getUsers();
    this.userListService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

}
