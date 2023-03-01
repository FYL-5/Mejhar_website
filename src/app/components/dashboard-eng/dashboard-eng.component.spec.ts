import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEngComponent } from './dashboard-eng.component';

describe('DashboardEngComponent', () => {
  let component: DashboardEngComponent;
  let fixture: ComponentFixture<DashboardEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
