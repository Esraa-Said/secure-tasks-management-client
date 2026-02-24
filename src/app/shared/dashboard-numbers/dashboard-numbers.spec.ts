import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNumbers } from './dashboard-numbers';

describe('DashboardNumbers', () => {
  let component: DashboardNumbers;
  let fixture: ComponentFixture<DashboardNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardNumbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNumbers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
