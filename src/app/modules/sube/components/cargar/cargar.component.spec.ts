import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarComponent } from './cargar.component';

describe('CargarComponent', () => {
  let component: CargarComponent;
  let fixture: ComponentFixture<CargarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarComponent]
    });
    fixture = TestBed.createComponent(CargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
