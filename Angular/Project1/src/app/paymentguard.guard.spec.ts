import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { paymentguardGuard } from './paymentguard.guard';

describe('paymentguardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => paymentguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
