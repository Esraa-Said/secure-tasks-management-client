import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-send-verification-email-component',
  imports: [],
  templateUrl: './send-verification-email-component.html',
  styleUrl: './send-verification-email-component.css',
})
export class SendVerificationEmailComponent implements OnInit {
  private authService = inject(AuthService);
  userEmail: string = '';
  resMessage: string = '';
  errMessage: string = '';
  ngOnInit(): void {
    this.userEmail = history.state.userEmail;
  }

  resendVerificationCode() {
    this.resMessage = '';
    this.errMessage = '';

    this.authService.resendVerificationCode(this.userEmail).subscribe({
      next: (res) => {
        this.resMessage = res.message;
      },
      error: (err) => {
        this.errMessage = err.error?.message || 'Internal Server Error';
      },
    });
  }
}
