import { Component, computed, inject, signal } from '@angular/core';
import {
  form,
  maxLength,
  minLength,
  pattern,
  required,
  validate,
  FormField,
} from '@angular/forms/signals';
import { AuthService } from '../../../../core/services/auth-service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-reset-password-component',
  imports: [FormField],
  templateUrl: './reset-password-component.html',
  styleUrl: './reset-password-component.css',
})
export class ResetPasswordComponent {
  resMessage: string = '';
  errMessage: string = '';
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  code = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('code'))));
  resetPasswordModel = signal<{ password: string; confirmPassword: string }>({
    password: '',
    confirmPassword: '',
  });

  resetPasswordForm = form(this.resetPasswordModel, (schema) => {
    required(schema.password, { message: 'Password is required' });
    required(schema.confirmPassword, { message: 'Confirm password is required' });
    minLength(schema.password, 6, {
      message: 'Password must be at least 6 characters long',
    });

    maxLength(schema.password, 255, {
      message: 'Password cannot exceed 255 characters',
    });

    pattern(schema.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    });
    validate(schema.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schema.password);
      if (confirmPassword !== password && confirmPassword !== '') {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match',
        };
      }
      return null;
    });
  });

  hasMinLength = computed(() => this.resetPasswordForm.password().value().length >= 6);
  hasUpperCase = computed(() => /[A-Z]/.test(this.resetPasswordForm.password().value()));
  hasLowerCase = computed(() => /[a-z]/.test(this.resetPasswordForm.password().value()));
  hasNumber = computed(() => /\d/.test(this.resetPasswordForm.password().value()));
  hasSpecialChar = computed(() => /[\W_]/.test(this.resetPasswordForm.password().value()));
  passwordCount = computed(() => this.resetPasswordForm.password().value().length);
  resetPassword(event: Event) {
    event.preventDefault();
    this.authService
      .resetPassword(this.resetPasswordForm.password().value(), this.code())
      .subscribe({
        next: (msg) => {
          this.resMessage = msg;
        },
        error: (error) => {
          this.errMessage = error;
        },
      });
  }
}
