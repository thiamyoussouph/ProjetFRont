import { TestBed } from '@angular/core/testing';

import { TypesvehiculeServiceService } from './typesvehicule-service.service';

describe('TypesvehiculeServiceService', () => {
  let service: TypesvehiculeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesvehiculeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
