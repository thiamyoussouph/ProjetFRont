import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypesvehiculesComponent } from './list-typesvehicules.component';

describe('ListTypesvehiculesComponent', () => {
  let component: ListTypesvehiculesComponent;
  let fixture: ComponentFixture<ListTypesvehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypesvehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypesvehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
