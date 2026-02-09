import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { catchError, map, of } from 'rxjs';

export const verifyAccountGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const code = route.paramMap.get('code');

  return authService.verifyAccount(code).pipe(
    map(() => {
      router.navigateByUrl('successfully-verified');
      return false; // Prevent access to the actual URL
    }),
    catchError((err) => {
      router.navigateByUrl('failed-verified', { state: { msg: err.error?.message || 'Internal server error' } });
      return of(false);
    })
  );
};