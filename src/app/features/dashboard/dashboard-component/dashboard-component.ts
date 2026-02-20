import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  todayDate = signal(new Date());
  numberOfTasks = signal(20);
  numberOfCompletedTasks = signal(20);
  numberOfArchivedTasks = signal(20);
}
