import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from './services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(private authService: JwtService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getRole();

    if (this.authService.isLoggedIn()) {
      if (role === 'ADMIN') {
        this.router.navigate(['/admin/equipements']);
      } else if (role === 'UTILISATEUR') {
        this.router.navigate(['/utilisateur/equipements']);
      } else if (role === 'TECHNICIEN') {
        this.router.navigate(['/technicien/tickets']);
      }
      return false;  // Prevent navigation to the guarded route
    } else {
      this.router.navigate(['/login']);
      return false;  // Prevent navigation to the guarded route
    }
  }
}
