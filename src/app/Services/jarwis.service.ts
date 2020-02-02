import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) {

  }
  login(data){
    //console.log(data)
    return this.http.post(`${this.baseUrl}/login`, data)
  }

}
