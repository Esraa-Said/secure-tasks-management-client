import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-not-verified-resend-email-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './not-verified-resend-email-component.html',
  styleUrl: './not-verified-resend-email-component.css',
})
export class NotVerifiedResendEmailComponent {
  private authService = inject(AuthService);
  resMessage: string = '';
  errMessage: string = '';

  resendVerificationCode(userEmail: string) {
    this.resMessage = '';
    this.errMessage = '';

    this.authService.resendVerificationCode(userEmail).subscribe({
      next: (res) => {
        this.resMessage = res.message;
      },
      error: (err) => {
        this.errMessage = err.error?.message || 'Internal Server Error';
      },
    });
  }
}
