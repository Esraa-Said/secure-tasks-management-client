import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verifyAccountGuard } from './verify-account-guard';

describe('verifyAccountGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verifyAccountGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
