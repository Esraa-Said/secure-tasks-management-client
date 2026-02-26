import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../../../core/services/task-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-high-priority-tasks-dashboard-component',
  imports: [DatePipe],
  templateUrl: './high-priority-tasks-dashboard-component.html',
  styleUrl: './high-priority-tasks-dashboard-component.css',
})
export class HighPriorityTasksDashboardComponent {
  taskService = inject(TaskService);

  errorMessage = signal<string>('');

  highTasks = toSignal(
    this.taskService.getUserTasks({ priority: 'HIGH' }).pipe(
      catchError((error) => {
        this.errorMessage.set(error);
        return of([]); // fallback value
      }),
    ),
    { initialValue: [] },
  );
}
