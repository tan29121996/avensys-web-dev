import { CanActivateFn } from '@angular/router';

export const firstguardGuard: CanActivateFn = (route, state) => {
  // if (20 > 10) {
    // return true;
  // } else {
  //   return false;
  // }
  return true;
};
