import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TaskInterface } from '../models/task-interface';
import { TaskFilters } from '../models/task-filter';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/task';

  private httpClient = inject(HttpClient);
  getTasksStatus(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/status`)
      .pipe(
        catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
      );
  }

  getUserTasks(filters: TaskFilters): Observable<TaskInterface[]> {
    return this.httpClient
      .get<any>(this.baseUrl, {
        params: filters as any,
      })
      .pipe(
        map((res) => res.data.tasks as TaskInterface[]),
        catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
      );
  }
}
