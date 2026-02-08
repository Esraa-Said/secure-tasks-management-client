import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/pages/signup-component/signup-component';
import { SendVerificationEmailComponent } from './features/auth/pages/send-verification-email-component/send-verification-email-component';
import { VerifiedSuccessfullyComponent } from './features/auth/pages/verified-successfully-component/verified-successfully-component';
import { VerifyAccountComponent } from './features/auth/pages/verify-account-component/verify-account-component';
import { VerifiedFailedComponent } from './features/auth/pages/verified-failed-component/verified-failed-component';

export const routes: Routes = [
  { path: 'register', component: SignupComponent, pathMatch: 'full' },
  { path: 'email-verification-sent', component: SendVerificationEmailComponent, pathMatch: 'full' },
  { path: 'auth/verify-user/:code', component: VerifyAccountComponent, pathMatch: 'full' },
  { path: 'successfully-verified', component: VerifiedSuccessfullyComponent, pathMatch: 'full' },
  { path: 'failed-verified', component: VerifiedFailedComponent, pathMatch: 'full' },
];
