import { CanDeactivateFn } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const deactivateGuard: CanDeactivateFn<ProductComponent> = (component: ProductComponent, currentRoute, currentState, nextState) => {
  if (component.isAllowed) {
    return window.confirm("You are not allowed to leave")
  } else {
    return true
  }
}
