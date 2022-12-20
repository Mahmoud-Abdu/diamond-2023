import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeLibraryComponent } from './knowledge-library.component';

describe('KnowledgeLibraryComponent', () => {
  let component: KnowledgeLibraryComponent;
  let fixture: ComponentFixture<KnowledgeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
