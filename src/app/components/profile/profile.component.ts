import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private baseUrl = 'http://localhost:8000/api'
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token');
  }



}
