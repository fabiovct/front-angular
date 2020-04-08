import {Injectable, ErrorHandler} from '@angular/core'

@Injectable()

export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login',
  };
  constructor() {

  }
  handle(token){
    this.set(token);
    //console.log(this.payload(token))
  }
  set(token){
    localStorage.setItem('token',token);
  }
  get(){
    return localStorage.getItem('token')
  }
  remove(){
    localStorage.removeItem('token')
  }

  isValid() {
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      //console.log(token)
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token){
   const payload = token.split('.')[1];
   //const token1 = this.decode(payload);
   console.log(this.decode(payload))
   return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
