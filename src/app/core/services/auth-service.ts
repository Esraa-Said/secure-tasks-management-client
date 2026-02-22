import { effect, inject, Injectable, signal } from '@angular/core';
import { SignupFormInterface } from '../models/signup-form-interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    const token = localStorage.getItem('auth-token');
    const user = localStorage.getItem('user');

    if (token && user && !this.isTokenExpired(token)) {
      this.#token.set(token);
      this.user.set(JSON.parse(user));
    }
  }
  private baseUrl = 'http://localhost:5000/auth';

  private httpClient = inject(HttpClient);

  #token = signal<string | null>(localStorage.getItem('auth-token'));
  token = this.#token.asReadonly();
  user = signal<UserInterface | null>(null);
  setToken(newToken: string) {
    this.#token.set(newToken);
    localStorage.setItem('auth-token', newToken);
  }

  isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth-token');
    return !!token && !this.isTokenExpired(token);
  }

  logout() {
    this.#token.set(null);
    this.user.set(null);
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
  }

  register(data: SignupFormInterface): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/register`, data).pipe(
      map((res) => res.message),
      catchError((error) => throwError(() => error.error?.message || 'Server Error')),
    );
  }

  signin(data: { email: string; password: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, data).pipe(
      map((res) => {
        this.setToken(res.token);
        this.user.set(res.data.user);
        localStorage.setItem('user', JSON.stringify(this.user()));
      }),
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
      map((res) => {
        this.setToken(res.token);
        this.user.set(res.data.user);
        localStorage.setItem('user', JSON.stringify(this.user()));
      }),
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
