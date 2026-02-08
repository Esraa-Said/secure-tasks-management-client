import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/pages/signup-component/signup-component';
import { SendVerificationEmailComponent } from './features/auth/pages/send-verification-email-component/send-verification-email-component';
import { VerifiedSuccessfullyComponent } from './features/auth/pages/verified-successfully-component/verified-successfully-component';
import { VerifiedFailedComponent } from './features/auth/pages/verified-failed-component/verified-failed-component';
import { verifyAccountGuard } from './core/guards/verify-account-guard';
import { SigninComponent } from './features/auth/pages/signin-component/signin-component';

export const routes: Routes = [
  { path: 'register', component: SignupComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: 'email-verification-sent', component: SendVerificationEmailComponent, pathMatch: 'full' },
  { path: 'auth/verify-user/:code', component: SendVerificationEmailComponent ,canActivate: [verifyAccountGuard] },
  { path: 'successfully-verified', component: VerifiedSuccessfullyComponent, pathMatch: 'full' },
  { path: 'failed-verified', component: VerifiedFailedComponent, pathMatch: 'full' },
];

