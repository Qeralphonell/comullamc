import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ShowDetails: boolean = false;

  ToggleDetails(): void {
    this.ShowDetails = !this.ShowDetails;
  }
}
