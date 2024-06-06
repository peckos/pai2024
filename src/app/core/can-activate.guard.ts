import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard {
  constructor(private router: Router, private route: ActivatedRoute) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }
}
