import {Injectable, ErrorHandler} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { TokenService } from './token.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()

export class AfterLoginService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
      //const $token:
      //if(localStorage.getItem('token') == )
      //return false
      //const token = localStorage.getItem('token');
      //console.log(token)
    return this.Token.loggedIn();
  }




  constructor(private Token:TokenService) {

  }
}
