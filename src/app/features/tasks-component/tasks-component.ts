import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../../core/services/task-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-tasks-component',
  imports: [],
  templateUrl: './tasks-component.html',
  styleUrl: './tasks-component.css',
})
export class TasksComponent {
  private taskService = inject(TaskService);
  errorMessage = signal<string>('');

  tasks = toSignal(
    this.taskService.getUserTasks({}).pipe(
      catchError((error) => {
        this.errorMessage.set(error);
        return of([]);
      }),
    ),
    { initialValue: [] },
  );
}
