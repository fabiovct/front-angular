import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggeIn: boolean;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggeIn = value);

  }

}
