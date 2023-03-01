import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-arab',
  templateUrl: './dashboard-arab.component.html',
  styleUrls: ['./dashboard-arab.component.css']
})
export class DashboardArabComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }
  isAdmin: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem("role") == "Admin") {
      this.isAdmin = true;
    }
  }

  logOut() {
    this._AuthService.signOut()
  }
}
