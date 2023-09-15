import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridosComponent } from './recorridos.component';

describe('RecorridosComponent', () => {
  let component: RecorridosComponent;
  let fixture: ComponentFixture<RecorridosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecorridosComponent]
    });
    fixture = TestBed.createComponent(RecorridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
