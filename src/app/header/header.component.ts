import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  email = null;
  isAuthenticated = false;
  isAdmin = false;
  private userSub: Subscription;
  private roleSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.email = user ? user.email : '';
    });

    this.roleSub = this.authService.role.subscribe(role => {
      this.isAdmin = role === 'Admin' ? true : false;
      console.log('Role: ', role);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.roleSub.unsubscribe();
  }
  
}
