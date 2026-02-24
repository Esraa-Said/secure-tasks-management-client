import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-numbers',
  imports: [],
  templateUrl: './dashboard-numbers.html',
  styleUrl: './dashboard-numbers.css',
})
export class DashboardNumbers {
numberOfProgressTasks = input();
numberOfTasks = input();
numberOfCompletedTasks = input();
numberOfArchivedTasks = input();
}
