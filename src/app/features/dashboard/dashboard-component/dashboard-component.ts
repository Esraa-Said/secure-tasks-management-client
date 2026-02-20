import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { TaskService } from '../../../core/services/task-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
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
        this.numberOfTasks = res.totalTasks;
        this.numberOfCompletedTasks = res.completedTasks;
        this.numberOfArchivedTasks = res.cancelledTasks;
        this.numberOfProgressTasks = res.inProgressTasks;
      },
      error: (err)=>{
        this.errorMessage = err;
      }
    });
  }
}
