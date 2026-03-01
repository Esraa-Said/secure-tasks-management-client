import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../../core/services/task-service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TaskStatus, TaskPriority, TaskInterface } from '../../core/models/task-interface';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tasks-component',
  imports: [MatIcon, RouterLink, DatePipe],
  templateUrl: './tasks-component.html',
  styleUrl: './tasks-component.css',
})
export class TasksComponent {
  taskStatus = TaskStatus;
  taskPriority = TaskPriority;
  selectedStatus = signal<string>('');
  selectedPriority = signal<string>('');
  taskNameSearch = signal<string>('');
  nameSearchSubject = new Subject<string>();
  private taskService = inject(TaskService);
  errorMessage = signal<string>('');
  tasks = signal<any[]>([]);

  constructor() {
    this.nameSearchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      this.taskNameSearch.set(value);
      this.loadTasks();
    });
    this.loadTasks();
  }

  getStatusClass(status: TaskInterface['status']): string {
  switch (status) {
    case 'PENDING':
      return 'status-pending';
    case 'IN_PROGRESS':
      return 'status-in-progress';
    case 'COMPLETED':
      return 'status-completed';
    case 'CANCELLED':
      return 'status-cancelled';
    default:
      return '';
  }
}

getPriorityClass(priority: TaskInterface['priority']): string {
  switch (priority) {
    case 'LOW':
      return 'priority-low';
    case 'MEDIUM':
      return 'priority-medium';
    case 'HIGH':
      return 'priority-high';
    default:
      return '';
  }
}

  onNameSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameSearchSubject.next(value);
  }
  onStatusChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedStatus.set(value);
    this.loadTasks();
  }

  onPriorityChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedPriority.set(value);
    this.loadTasks();
  }

  loadTasks() {
    const filters: any = {};

    if (this.taskNameSearch().trim()) {
      filters.title = this.taskNameSearch().trim();
    }
    if (this.selectedStatus() != 'ALL STATUS') {
      filters.status = this.selectedStatus();
    } else {
      delete filters.status;
    }

    if (this.selectedPriority() != 'ALL PRIORITY') {
      filters.priority = this.selectedPriority();
    } else {
      delete filters.priority;
    }

    this.taskService.getUserTasks(filters).subscribe({
      next: (res) => this.tasks.set(res),
      error: (err) => this.errorMessage.set(err),
    });
  }
}
