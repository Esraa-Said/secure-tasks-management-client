import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { AuthService } from '../../../../core/services/auth-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin-component',
  imports: [FormField, RouterLink],
  templateUrl: './signin-component.html',
  styleUrl: './signin-component.css',
})
export class SigninComponent {
  errorMessage: string = '';
  statusCode: number = 0;
  private authService = inject(AuthService);
  private router = inject(Router);

  signinModel = signal<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  signinForm = form(this.signinModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    required(schema.password, { message: 'Password is required' });
  });

  onSubmit(event: Event) {
    this.errorMessage = '';
    event.preventDefault();

    if (this.signinForm().invalid()) {
      this.signinForm.email().markAsTouched();
      this.signinForm.password().markAsTouched();
      return;
    }
    this.authService.signin(this.signinModel()).subscribe({
      next: (res) => {
        if (this.authService.user()) this.router.navigateByUrl('/dashboard');
      },
      error: (res) => {
        this.errorMessage = res.message;
        this.statusCode = res.statusCode;
      },
    });
  }
}
