import { CanActivateChildFn } from '@angular/router';

export const thirdguardGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
