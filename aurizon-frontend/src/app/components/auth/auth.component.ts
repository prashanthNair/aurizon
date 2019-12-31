import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import Logger from 'src/app/utils/logger';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  showEmail: Boolean = false;
  login = { username: { email: "", error: false }, password: { password: "", error: false } }
  userAction: string = "Sign Up";
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn() {

    try {

      // stop here if details are invalid
      if (!this.hasValidDetails()) {
        return
      }

      let user = { email: this.login.username.email, password: this.login.password.password }
      this.authService.login(user)
        .subscribe(
          res => {
            localStorage.setItem('user', JSON.stringify(res.data));
            this.router.navigate(['/facilities']);
          },
          error => {
            Logger.log("Service Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }

  }

  onSignUp() {
    try {

      if (!this.hasValidDetails()) {
        return
      }
      let user = { email: this.login.username.email, password: this.login.password.password }
      this.authService.createUser(user)
        .subscribe(
          res => {
            if (res.data[0].insertId) {
              localStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['/facilities']);
            }
          }, error => {
            Logger.log("Service Error", error)
          });
    }
    catch (error) {
      Logger.log(" Error", error)
    }
  }

  validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.target.value) == false) {
      this.login.username.error = true;
      return false;
    } else {
      this.login.username.error = false;
    }

    return true;

  }
  hasValidDetails(): Boolean {
    if (this.login.username.email.length == 0 || this.login.password.password.length == 0) {
      if (this.login.username.email.length == 0) {
        this.login.username.error = true;
      }
      if (this.login.password.password.length == 0) {
        this.login.password.error = true;
      }
      return false;
    }
    return true
  }

  onEmailLogin() {
    this.showEmail = true;
  }

  navigateToHome() {
    this.router.navigate(['/facilities']);
  }

  gotoSignIn() {
    this.userAction = "Sign In"
  }

  gotoSignUp() {
    this.userAction = "Sign Up";
  }
}
