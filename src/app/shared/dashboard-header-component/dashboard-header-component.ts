import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-dashboard-header-component',
  imports: [],
  templateUrl: './dashboard-header-component.html',
  styleUrl: './dashboard-header-component.css',
})
export class DashboardHeaderComponent {
authService = inject(AuthService);
}
