import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorPandaComponent } from './vector-panda.component';

describe('VectorPandaComponent', () => {
  let component: VectorPandaComponent;
  let fixture: ComponentFixture<VectorPandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorPandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorPandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
