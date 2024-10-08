import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router} from '@angular/router';
import {Injectable} from "@angular/core";

import {JwtService} from "../services/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class roleGuardGuard implements CanActivate {

  constructor(private authService: JwtService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    // Get the roles required for this route
    const requiredRoles = next.data['role'] as Array<string>;

    // Check if the user is logged in
    if (this.authService.isLoggedIn()) {
      // Get the user's role from the AuthService
      const userRole = this.authService.getRole();

      // Check if the user's role matches the required roles
      if (requiredRoles.includes(userRole || '')) {
        return true;
      } else {
        // Redirect to an unauthorized page if the role doesn't match
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      // Redirect to login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
