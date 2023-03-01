import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg: string = ''

  constructor(private _AuthService: AuthService, private _UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl(null, [Validators.required])

  })

  register() {

    if (this.registerForm.valid) {
      let data: any = this.registerForm.value
      this._AuthService.signUp(data.email, data.password)
        .then(response => {
          this.errorMsg = '';
          this._UsersService.addNewUser(response.user?.uid, data.name , data.email).then(() => {
            this.router.navigate(['login']);
          })
        })
        .catch((error) => {
          let errorCode = error.code;
          if (errorCode == 'auth/email-already-in-use') {
            this.errorMsg = 'The email address is already in use by another account'
          } else if (errorCode == 'auth/weak-password') {
            this.errorMsg = 'The password is too weak.';
          } else {
            console.log(error.message)
          }
        })
    }
  }

}
