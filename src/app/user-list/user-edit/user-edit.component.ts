import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserListService } from '../user-list.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') userForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedUserIndex: number;
  editedUser: User;
  defaultRole = 'Admin';
  defaultStatus = 'Active';

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.subscription = this.userListService.startedEditing.subscribe(
      (index: number) => {
        this.editedUserIndex = index;
        this.editMode = true;
        this.editedUser = this.userListService.getUser(index);
        this.userForm.setValue({
          username: this.editedUser.username,
          role: this.editedUser.role,
          status: this.editedUser.status
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.username, value.role, value.status);
    if(this.editMode) {
      this.userListService.updateUser(this.editedUserIndex, newUser);
    } else {
      this.userListService.addUser(newUser);
    }
    this.editMode = false;
    form.controls['username'].reset();
  }

  onClear() {
    this.userForm.controls['username'].reset();
    this.editMode = false;
  }

  onDelete() {
    this.userListService.deleteUser(this.editedUserIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
