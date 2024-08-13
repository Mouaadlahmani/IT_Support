import { TestBed } from '@angular/core/testing';

import { CostumInterceptor } from './costum.interceptor';

describe('CostumInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CostumInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CostumInterceptor = TestBed.inject(CostumInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
