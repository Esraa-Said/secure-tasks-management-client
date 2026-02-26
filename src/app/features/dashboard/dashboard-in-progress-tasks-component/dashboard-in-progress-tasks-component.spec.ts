import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInProgressTasksComponent } from './dashboard-in-progress-tasks-component';

describe('DashboardInProgressTasksComponent', () => {
  let component: DashboardInProgressTasksComponent;
  let fixture: ComponentFixture<DashboardInProgressTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardInProgressTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInProgressTasksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
