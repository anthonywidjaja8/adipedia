import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserListService } from './user-list.service';
import { UserList } from './user-list.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: UserList[];
  private subscription: Subscription;

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.subscription = this.userListService.usersChanged.subscribe(
      (users: UserList[]) => {
        this.users = users;
      }
    )
    this.users = this.userListService.getUsers();
  }

  onEditItem(index: number) {
    this.userListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
