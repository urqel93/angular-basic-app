import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../events/common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px
    }

    .error input {
      background-color: #e3c3c5
    }

    .error ::-webkit-input-placeholder {
      color: #999
    }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }


  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(value) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(value.firstName, value.lastName);
      this.toastr.success('Profile changed');
    }
  }
}
