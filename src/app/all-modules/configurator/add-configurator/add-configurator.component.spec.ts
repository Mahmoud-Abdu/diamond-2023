import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfiguratorComponent } from './add-configurator.component';

describe('AddConfiguratorComponent', () => {
  let component: AddConfiguratorComponent;
  let fixture: ComponentFixture<AddConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
