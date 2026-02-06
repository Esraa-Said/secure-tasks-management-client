import { inject, Injectable } from '@angular/core';
import { SignupFormInterface } from '../models/signup-form-interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000';

  private httpClient = inject(HttpClient);

  register(data: SignupFormInterface): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/auth/register`, data).pipe(
      map((res)=>res.message),
      catchError((error) => throwError(() => error.error?.message || 'Server Error')),
    );
  }

  // sendVerificationEmail():Observable<any>{
  //   return this.httpClient.get<any>(`${this.baseUrl}/auth/verify-user/`).pipe
  // }
}
