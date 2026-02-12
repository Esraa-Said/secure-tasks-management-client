import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-not-verified-resend-email-component',
  imports: [RouterLink, FormsModule ],
  templateUrl: './not-verified-resend-email-component.html',
  styleUrl: './not-verified-resend-email-component.css',
})
export class NotVerifiedResendEmailComponent {

}
