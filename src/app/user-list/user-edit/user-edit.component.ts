import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserListService } from '../user-list.service';
import { User } from '../user-list.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { tap } from 'rxjs/operators';

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
  isLoading = false;
  isFetchClicked = false;
  
  constructor(private userListService: UserListService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.userListService.startedEditing.subscribe(
      (index: number) => {
        this.editedUserIndex = index;
        this.editMode = true;
        this.editedUser = this.userListService.getUser(index);
        this.userForm.setValue({
          email: this.editedUser.email,
          role: this.editedUser.role,
          status: this.editedUser.status
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.email, value.role, value.status);
    /*
    if(this.editMode) {
      this.userListService.updateUser(this.editedUserIndex, newUser);
    } else {
      this.userListService.addUser(newUser);
    }
    */
    this.editMode = false;
    this.userListService.updateUser(this.editedUserIndex, newUser);
    form.controls['email'].reset();
  }

  onClear() {
    this.userForm.controls['email'].reset();
    this.editMode = false;
  }
  /*
  onDelete() {
    this.userListService.deleteUser(this.editedUserIndex);
    this.onClear();
  }
  */
  onSaveData() {
    this.isLoading = true;
    const users = this.userListService.getUsers();
    console.log(users);
    this.dataStorageService.storeUsers(users)
    .subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
    });
  }
  
  onFetchData() {
    this.isLoading = true;
    this.isFetchClicked = true;
    this.dataStorageService.fetchUsers().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.userListService.setUsers(resData);
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
