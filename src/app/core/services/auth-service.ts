import { inject, Injectable } from '@angular/core';
import { SignupFormInterface } from '../models/signup-form-interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/auth';

  private httpClient = inject(HttpClient);

  register(data: SignupFormInterface): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/register`, data).pipe(
      map((res) => res.message),
      catchError((error) => throwError(() => error.error?.message || 'Server Error')),
    );
  }

  signin(data: { email: string; password: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, data).pipe(
      map((res) => res.message),
      catchError((error) => throwError(() => error.error?.message || 'Server Error')),
    );
  }

  verifyAccount(code: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/verify-user/${code}`);
  }
  resendVerificationCode(email: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/resend-verification-code`, { email: email });
  }
}
