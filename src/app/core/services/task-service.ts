import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/task';

  private httpClient = inject(HttpClient);
  getTasksStatus() : Observable<any>{
    return this.httpClient
      .get<any>(`${this.baseUrl}/status`)
      .pipe(
        catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
      );
  }
}
