import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RolefireGuard implements CanActivate {

  constructor(
     private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(window.localStorage.getItem("adm_role") != "admin")
      {
        this.router.navigate(['']);
      }

    return true;
  }
}
