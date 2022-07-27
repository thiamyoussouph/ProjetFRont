import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetatailVehiculeComponent } from './detatail-vehicule.component';

describe('DetatailVehiculeComponent', () => {
  let component: DetatailVehiculeComponent;
  let fixture: ComponentFixture<DetatailVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetatailVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetatailVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
