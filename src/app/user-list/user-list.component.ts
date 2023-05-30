import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserListService } from './user-list.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  private subscription: Subscription;

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.users = this.userListService.getUsers();
    this.subscription = this.userListService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  onEditItem(index: number) {
    this.userListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
