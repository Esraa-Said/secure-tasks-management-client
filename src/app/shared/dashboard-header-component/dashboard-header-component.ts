import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard-header-component',
  imports: [RouterLink],
  templateUrl: './dashboard-header-component.html',
  styleUrl: './dashboard-header-component.css',
})
export class DashboardHeaderComponent {
authService = inject(AuthService);
}
