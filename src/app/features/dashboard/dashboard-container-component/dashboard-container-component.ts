import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../../../shared/dashboard-header-component/dashboard-header-component';
import { RouterOutlet } from '@angular/router';
import { DashboardSidebarComponent } from '../../../shared/dashboard-sidebar-component/dashboard-sidebar-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [DashboardHeaderComponent, RouterOutlet, DashboardSidebarComponent],
  templateUrl: './dashboard-container-component.html',
  styleUrl: './dashboard-container-component.css',
})
export class DashboardContainerComponent {}
