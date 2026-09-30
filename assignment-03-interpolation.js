Assignment 03: String Interpolation
====================================

// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 20 Interpolation';
  username = 'DevUser';
  today = new Date();

  getGreeting(): string {
    return `Welcome back, ${this.username}!`;
  }
}

// app.component.html
<div style="text-align:center; margin-top: 50px;">
  <h1>{{ title }}</h1>
  <p>Hello, {{ username }} 👋</p>
  <p>Today is: {{ today | date:'fullDate' }}</p>
  <p>{{ getGreeting() }}</p>
  <p>2 + 3 = {{ 2 + 3 }}</p>
</div>
