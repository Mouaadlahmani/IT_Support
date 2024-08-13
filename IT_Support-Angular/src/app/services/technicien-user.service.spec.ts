import { TestBed } from '@angular/core/testing';

import { TechnicienUserService } from './technicien-user.service';

describe('TechnicienUserService', () => {
  let service: TechnicienUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicienUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
