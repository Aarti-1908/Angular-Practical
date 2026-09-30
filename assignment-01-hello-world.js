Assignment 01: Hello World (Angular)
====================================

// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = 'Hello World';
}

// app.component.html
<h1>{{ message }}</h1>
