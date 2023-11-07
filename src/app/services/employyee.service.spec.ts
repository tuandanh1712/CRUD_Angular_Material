import { TestBed } from '@angular/core/testing';

import { EmployyeeService } from './employyee.service';

describe('EmployyeeService', () => {
  let service: EmployyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
