import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from "@angular/core";
import { JwtService } from "./services/jwt.service";

export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(JwtService);
  const router = inject(Router);

  const currentUser = authService.currentUserValue;

  if (currentUser) {
    console.log(currentUser.role + "///////////");
    console.log(route.data['roles']);

    // Check if route has data specifying allowed roles
    if (route.data['roles'] && !route.data['roles'].includes(currentUser.role)) {
      // User's role is not authorized, redirect to home page
      router.navigate(['/login']);
      return false;
    }
    // Authorized, return true
    return true;
  }

  // Not logged in, redirect to login page with return url
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
