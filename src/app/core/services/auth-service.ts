import { effect, inject, Injectable, signal } from '@angular/core';
import { SignupFormInterface } from '../models/signup-form-interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #token = signal<string | null>(localStorage.getItem('auth_token'));
  token = this.#token.asReadonly();
  setToken(newToken: string) {
    this.#token.set(newToken);
    localStorage.setItem('auth-token', newToken);
  }

  logout() {
    this.#token.set(null);
    localStorage.removeItem('auth-token');
  }

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
      map((res) => this.setToken(res.token)),
      catchError((error) =>
        throwError(() => ({
          statusCode: error.status,
          message: error.error?.message || 'Internal Server Error',
        })),
      ),
    );
  }

  verifyAccount(code: string | null): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/verify-user/${code}`).pipe(
      map((res) => this.setToken(res.token)),
      catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
    );
  }
  resendVerificationCode(email: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/resend-verification-code`, { email });
  }

  sendForgetPasswordEmail(email: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/forget-password-mail`, { email }).pipe(
      map((res) => res.message),
      catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
    );
  }

  resetPassword(password: string, code: string | null | undefined): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/change-password/${code}`, { password }).pipe(
      map((res) => res.message),
      catchError((error) => throwError(() => error.error?.message || 'Internal Server Error')),
    );
  }
}
