import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/pages/signup-component/signup-component';

export const routes: Routes = [{ path: 'register', component: SignupComponent, pathMatch: 'full' }];
