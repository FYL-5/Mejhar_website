import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  Subscribe: string = 'Subscribe'

  constructor(
    private _AuthService: AuthService,
    private _UsersService: UsersService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this._AuthService.user.subscribe(user => {
      if (user) {
        this._AuthService.userId = user.uid
      } else {
        this._AuthService.userId = ''
      }
    })
  }

  logOut() {

    this._AuthService.signOut()
    this.router.navigate(['login'])

  }

  subscribe(event:Event , service: string) {

    let text = event.target as HTMLElement;

    console.log(text.innerHTML);
    

    if (text.innerHTML == "Subscribe") {
      // alert(`You Subscribe Succesfully in ${service} Service`);
      this._UsersService.addToService({ "service": service }).then((res) => {
        console.log("Done....2", res);
      })
      text.innerHTML = "Subscribed";
      text.classList.add('bg-info', 'border-0')

    }
  }

}

