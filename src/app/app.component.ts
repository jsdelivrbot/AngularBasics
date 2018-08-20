import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h2>Welcome to inline template {{title}}</h2>
    <app-other></app-other>
    <app-another></app-another>
  </div>`,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h2{
    color: red;
  }`]
})
export class AppComponent {
  title = 'first-app';
}