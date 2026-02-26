import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriorityTasksDashboardComponent } from './high-priority-tasks-dashboard-component';

describe('HighPriorityTasksDashboardComponent', () => {
  let component: HighPriorityTasksDashboardComponent;
  let fixture: ComponentFixture<HighPriorityTasksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighPriorityTasksDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighPriorityTasksDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
