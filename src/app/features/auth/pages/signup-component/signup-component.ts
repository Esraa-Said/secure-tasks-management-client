import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  email,
  form,
  maxLength,
  minLength,
  pattern,
  required,
  FormField,
} from '@angular/forms/signals';
import { SignupFormInterface } from '../../../../core/models/signup-form-interface';
import { AuthService } from '../../../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  imports: [FormField],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.css',
})
export class SignupComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  errorMessage: WritableSignal<string> = signal<string>('');
  signupModel = signal<SignupFormInterface>({
    name: '',
    email: '',
    password: '',
  });

  signupForm = form(this.signupModel, (schemaPath) => {
    required(schemaPath.name, {
      message: 'Full name is required',
    });

    minLength(schemaPath.name, 2, {
      message: 'Name must be at least 2 characters long',
    });

    maxLength(schemaPath.name, 100, {
      message: 'Name cannot exceed 100 characters',
    });

    required(schemaPath.email, {
      message: 'Email address is required',
    });

    email(schemaPath.email, {
      message: 'Please enter a valid email address',
    });

    required(schemaPath.password, {
      message: 'Password is required',
    });

    minLength(schemaPath.password, 6, {
      message: 'Password must be at least 6 characters long',
    });

    maxLength(schemaPath.password, 255, {
      message: 'Password cannot exceed 255 characters',
    });

    pattern(schemaPath.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.errorMessage.set('');

    if (this.signupForm().invalid()) {
      this.signupForm.name().markAsTouched();
      this.signupForm.email().markAsTouched();
      this.signupForm.password().markAsTouched();
      return;
    }
    this.authService.register(this.signupModel()).subscribe({
      next: (message) => {
        this.router.navigateByUrl('/email-verification-sent');
      },
      error: (message) => {
        this.errorMessage.set(message);
      },
    });
  }
}
