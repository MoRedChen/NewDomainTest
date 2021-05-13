import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // const canActivate = next.queryParams.name === 'MoRed';
    const canActivate = next.queryParams.isLogin === 'true';

    if (!canActivate) {
      // alert('你不是MoRed，不能進去！');
      alert('你沒有登入，不能進去！');
    }

    return canActivate;

  }

}
