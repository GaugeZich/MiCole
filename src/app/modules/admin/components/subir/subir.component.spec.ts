import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirComponent } from './subir.component';

describe('SubirComponent', () => {
  let component: SubirComponent;
  let fixture: ComponentFixture<SubirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirComponent]
    });
    fixture = TestBed.createComponent(SubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
