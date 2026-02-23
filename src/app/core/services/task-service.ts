import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TaskInterface } from '../models/task-interface';

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

  getUserTasks(status?: string, priority?: string, title?: string): Observable<any> {
    let query: any = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (title) query.title = title;
    
    return this.httpClient.get<any>(this.baseUrl, { params: { ...query } }).pipe(
      map((res) => res.data.tasks),
      catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
    );
  }
}
