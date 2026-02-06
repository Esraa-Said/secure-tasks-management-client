import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/pages/signup-component/signup-component';
import { SendVerificationEmailComponent } from './features/auth/pages/send-verification-email-component/send-verification-email-component';

export const routes: Routes = [
  { path: 'register', component: SignupComponent, pathMatch: 'full' },
  { path: 'email-verification-sent', component: SendVerificationEmailComponent, pathMatch: 'full' },
];
