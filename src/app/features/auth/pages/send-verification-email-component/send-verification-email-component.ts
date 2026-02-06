import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-verification-email-component',
  imports: [],
  templateUrl: './send-verification-email-component.html',
  styleUrl: './send-verification-email-component.css',
})
export class SendVerificationEmailComponent implements OnInit {

  userEmail: string = '';
  ngOnInit(): void {
      this.userEmail = history.state.userEmail;
  }
}
