import { TestBed } from '@angular/core/testing';

import { SubGroupDataService } from './subGroup-data.service';

describe('SubGroupDataService', () => {
  let service: SubGroupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGroupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
