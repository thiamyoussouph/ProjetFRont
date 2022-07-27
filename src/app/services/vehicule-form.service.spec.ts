import { TestBed } from '@angular/core/testing';

import { VehiculeFormService } from './vehicule-form.service';

describe('VehiculeFormService', () => {
  let service: VehiculeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
