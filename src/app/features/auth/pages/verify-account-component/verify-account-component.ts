import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-verify-account-component',
  imports: [],
  templateUrl: './verify-account-component.html',
  styleUrl: './verify-account-component.css',
})
export class VerifyAccountComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    this.authService.verifyAccount(code).subscribe({
      next: (res) => {
       
        this.router.navigateByUrl('successfully-verified');
      },
      error: (error)=>{
      this.router.navigateByUrl('failed-verified', {state: error.error?.message});

      }
    });
  }
}
