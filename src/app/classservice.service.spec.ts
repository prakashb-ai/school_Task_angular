import { TestBed } from '@angular/core/testing';

import { ClassserviceService } from './classservice.service';

describe('ClassserviceService', () => {
  let service: ClassserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
