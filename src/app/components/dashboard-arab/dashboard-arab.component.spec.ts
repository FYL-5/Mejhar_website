import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArabComponent } from './dashboard-arab.component';

describe('DashboardArabComponent', () => {
  let component: DashboardArabComponent;
  let fixture: ComponentFixture<DashboardArabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardArabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
