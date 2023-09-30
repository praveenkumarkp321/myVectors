import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorSky2Component } from './vector-sky2.component';

describe('VectorSky2Component', () => {
  let component: VectorSky2Component;
  let fixture: ComponentFixture<VectorSky2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorSky2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorSky2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
