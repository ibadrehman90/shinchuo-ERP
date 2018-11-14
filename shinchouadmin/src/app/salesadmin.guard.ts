import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SalesadminGuard implements CanActivate {
  constructor(
    private router: Router
 ) {}

 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     if(window.localStorage.getItem("adm_role") != "admin" && window.localStorage.getItem("adm_role") != "salesuser")
     {
       this.router.navigate(['']);
     }

   return true;
 }
}
