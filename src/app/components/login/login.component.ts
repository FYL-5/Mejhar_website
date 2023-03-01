import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = ''
  isUser: boolean = false;

  constructor(private _AuthService: AuthService, private _UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this._AuthService.user.subscribe(user => {
      if (user) {
        this._AuthService.userId = user.uid;
        this.isUser = true;
      } else {
        this._AuthService.userId = ''
        this.isUser = false;
      }
    })
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  login() {
    let data: any = this.loginForm.value
    this._AuthService.signIn(data.email, data.password)
      .then((res) => {

        if (data.email == "admin@gmail.com") {
          this.router.navigate(['dashboard-admin'])
        } else {
          this.router.navigate(['dashboard-eng'])
        }
        this.errorMsg = '';




      })
      .catch((error) => {
        let errorCode = error.code;
        if (errorCode == 'auth/user-not-found') {
          this.errorMsg = 'The email is not found'
        } else if (errorCode == 'auth/wrong-password') {
          this.errorMsg = 'The password is invalid';
        } else {
          console.log(error.message)
        }
      })
  }

}
