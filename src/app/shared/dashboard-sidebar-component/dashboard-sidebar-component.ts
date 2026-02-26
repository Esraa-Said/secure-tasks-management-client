import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-sidebar-component',
  imports: [RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './dashboard-sidebar-component.html',
  styleUrl: './dashboard-sidebar-component.css',
})
export class DashboardSidebarComponent {}
