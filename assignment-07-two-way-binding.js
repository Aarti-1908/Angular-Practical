Assignment 07: Two-Way Data Binding
====================================

// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Twowaydatabinding';
  name: string = '';
  surname = 'Pandure';
}

// app.component.html
<h2>Two way Data Binding Example</h2>
<input type="text" [(ngModel)]="name" placeholder="Enter Your Name" />
<h3>Hello, {{name}} {{surname}}</h3>
