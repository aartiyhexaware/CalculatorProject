import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {
      if (localStorage.getItem('currentUser')) {
      return true;
      }

         // if not logged in redirect to login page with the return url
         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
         return false;
  }
  
}
