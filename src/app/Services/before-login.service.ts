import {Injectable, ErrorHandler} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { TokenService } from './token.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()

export class BeforeLoginService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
    return this.Token.loggedIn();
    }

  constructor(private Token:TokenService) {

  }
}
