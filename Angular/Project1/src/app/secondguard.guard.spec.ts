import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secondguardGuard } from './secondguard.guard';

describe('secondguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secondguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
