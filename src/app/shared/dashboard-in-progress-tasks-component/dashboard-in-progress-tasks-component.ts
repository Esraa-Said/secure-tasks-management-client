import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task-service';
import { signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { RouterLink } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-in-progress-tasks-component',
  imports: [RouterLink, DatePipe],
  templateUrl: './dashboard-in-progress-tasks-component.html',
  styleUrl: './dashboard-in-progress-tasks-component.css',
})
export class DashboardInProgressTasksComponent {
  taskService = inject(TaskService);

  errorMessage = signal<string>('');

  inProgressTasks = toSignal(
    this.taskService.getUserTasks({ status: 'IN_PROGRESS' }).pipe(
      catchError((error) => {
        this.errorMessage.set(error);
        return of([]); // fallback value
      }),
    ),
    { initialValue: [] },
  );
}
