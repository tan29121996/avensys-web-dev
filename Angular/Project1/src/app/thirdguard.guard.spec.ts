import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { thirdguardGuard } from './thirdguard.guard';

describe('thirdguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => thirdguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
