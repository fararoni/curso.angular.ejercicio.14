import { TestBed } from '@angular/core/testing';

import { ActivismoService } from './activismo.service';

describe('ActivismoService', () => {
  let service: ActivismoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivismoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
