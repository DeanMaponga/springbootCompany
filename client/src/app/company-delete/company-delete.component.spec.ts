import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDeleteComponent } from './company-delete.component';

describe('CompanyDeleteComponent', () => {
  let component: CompanyDeleteComponent;
  let fixture: ComponentFixture<CompanyDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDeleteComponent]
    });
    fixture = TestBed.createComponent(CompanyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
