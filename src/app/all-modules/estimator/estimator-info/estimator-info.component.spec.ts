import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorInfoComponent } from './estimator-info.component';

describe('EstimatorInfoComponent', () => {
  let component: EstimatorInfoComponent;
  let fixture: ComponentFixture<EstimatorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
