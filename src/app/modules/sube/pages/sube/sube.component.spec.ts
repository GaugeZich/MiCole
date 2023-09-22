import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeComponent } from './sube.component';

describe('SubeComponent', () => {
  let component: SubeComponent;
  let fixture: ComponentFixture<SubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubeComponent]
    });
    fixture = TestBed.createComponent(SubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
