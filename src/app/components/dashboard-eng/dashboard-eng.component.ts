import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-eng',
  templateUrl: './dashboard-eng.component.html',
  styleUrls: ['./dashboard-eng.component.css']
})
export class DashboardEngComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

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
