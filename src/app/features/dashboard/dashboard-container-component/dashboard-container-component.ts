import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../../../shared/dashboard-header-component/dashboard-header-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  imports: [DashboardHeaderComponent, RouterOutlet],
  templateUrl: './dashboard-container-component.html',
  styleUrl: './dashboard-container-component.css',
})
export class DashboardContainerComponent {}
