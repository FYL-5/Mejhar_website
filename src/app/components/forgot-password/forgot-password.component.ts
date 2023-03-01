import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  errorMsg: string = '' 

  constructor(private _AuthService: AuthService, private _UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  login() {
    let data: any = this.loginForm.value
    this._AuthService.forgotPassword(data.email)
      .then((res) => {
        this.errorMsg = '';
        this.router.navigate(['login'])
      })
      .catch((error) => {
        let errorCode = error.code;
        if (errorCode == 'auth/user-not-found') {
          this.errorMsg = 'The email is not found'
      //  } else if (errorCode == 'auth/wrong-password') {
       //   this.errorMsg = 'The password is invalid';
        } else {
          console.log(error.message)
        }
      })
  }

}
