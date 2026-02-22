import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { TaskService } from '../../../core/services/task-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-component',
  imports: [DatePipe],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  taskService = inject(TaskService);
  todayDate = signal(new Date());
  numberOfTasks: number = 0;
  numberOfCompletedTasks: number = 0;
  numberOfArchivedTasks: number = 0;
  numberOfProgressTasks: number = 0;
  errorMessage: string = '';

  ngOnInit(): void {
    this.taskService.getTasksStatus().subscribe({
      next: (res) => {
        this.numberOfTasks = res.data.totalTasks;
        this.numberOfCompletedTasks = res.data.completedTasks;
        this.numberOfArchivedTasks = res.data.cancelledTasks;
        this.numberOfProgressTasks = res.data.inProgressTasks;
      },
      error: (err)=>{
        this.errorMessage = err;
      }
    });
  }
}
