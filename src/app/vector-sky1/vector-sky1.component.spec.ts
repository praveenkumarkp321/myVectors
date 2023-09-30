import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorSky1Component } from './vector-sky1.component';

describe('VectorSky1Component', () => {
  let component: VectorSky1Component;
  let fixture: ComponentFixture<VectorSky1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorSky1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorSky1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
