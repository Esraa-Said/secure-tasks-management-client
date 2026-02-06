import { Component, inject } from '@angular/core';
import { LoaderService } from '../../core/services/loader-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading-component',
  imports: [AsyncPipe],
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.css',
})
export class LoadingComponent {
  public loaderService = inject(LoaderService);
}
