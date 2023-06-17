import { CanMatchFn } from '@angular/router';

export const paymentguardGuard: CanMatchFn = (route, segments) => {
  return true;
};
