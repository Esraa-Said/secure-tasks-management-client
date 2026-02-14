import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-send-forget-password-email',
  imports: [FormsModule, RouterLink],
  templateUrl: './send-forget-password-email.html',
  styleUrl: './send-forget-password-email.css',
})
export class SendForgetPasswordEmail {
  resMessage: string = '';
  errMessage: string = '';
  sendForgetPasswordEmail(userEmail: string) {}
}
