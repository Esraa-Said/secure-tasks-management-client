import { Component, OnInit } from '@angular/core';
import {  RouterLink } from "@angular/router";

@Component({
  selector: 'app-verified-failed-component',
  imports: [RouterLink],
  templateUrl: './verified-failed-component.html',
  styleUrl: './verified-failed-component.css',
})
export class VerifiedFailedComponent implements OnInit {
  errorMessage : string = '';
  ngOnInit(): void {
      this.errorMessage = history.state.msg;
  }

}
