import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggComponent } from './agg.component';

describe('AggComponent', () => {
  let component: AggComponent;
  let fixture: ComponentFixture<AggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggComponent]
    });
    fixture = TestBed.createComponent(AggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
