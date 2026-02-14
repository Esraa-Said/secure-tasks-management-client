import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-send-forget-password-email',
  imports: [FormsModule, RouterLink],
  templateUrl: './send-forget-password-email.html',
  styleUrl: './send-forget-password-email.css',
})
export class SendForgetPasswordEmail {
  resMessage: string = '';
  errMessage: string = '';
  authService = inject(AuthService);
  sendForgetPasswordEmail(userEmail: string) {
    this.resMessage = '';
    this.errMessage = '';
    this.authService.sendForgetPasswordEmail(userEmail).subscribe({
      next: (msg) => (this.resMessage = msg),
      error: (err) => (this.errMessage = err),
    });
    
    
  }
}
