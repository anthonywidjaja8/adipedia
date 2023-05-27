import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('roleInput') roleInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const userName = this.nameInputRef.nativeElement.value;
    const userRole = this.roleInputRef.nativeElement.value;
    const userStatus = this.statusInputRef.nativeElement.value;
    const newUser = new User(userName, userRole, userStatus);
    this.userListService.addUsers(newUser);
  }

}
