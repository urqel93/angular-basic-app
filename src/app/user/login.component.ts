import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})

export class LoginComponent {
  password;
  userName;
  loginInvalid = false;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  login(value) {
    this.authService.loginUser(value.userName, value.password).subscribe(res => {
      if (!res) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
        this.loginInvalid = false;
      }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
