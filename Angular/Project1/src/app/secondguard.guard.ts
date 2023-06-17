import { CanActivateFn } from '@angular/router';

export const secondguardGuard: CanActivateFn = (route, state) => {
  return true;
};
