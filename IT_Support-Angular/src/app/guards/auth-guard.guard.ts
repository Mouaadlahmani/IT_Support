import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuardGuard: CanActivateFn = (route,
                                              state) => {
  const token = localStorage.getItem('jwt');
  const router = inject(Router);
  if(token){
    return true;
  }else{
    router.navigate(['login'])
    return false
  }
};