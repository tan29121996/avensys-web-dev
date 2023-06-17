import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firstguardGuard } from './firstguard.guard';

describe('guard1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firstguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
