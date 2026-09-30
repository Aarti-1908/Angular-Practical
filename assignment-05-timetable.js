Assignment 05: Time Table (One-way Binding)
====================================

// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subjects = ['ML', 'FSD', 'SF', 'ASD'];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periods = ['9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM'];

  timetable: string[][] = [
    ['ML', 'FSD', 'SF', 'ASD'],
    ['FSD', 'ASD', 'ML', 'SF'],
    ['SF', 'ML', 'FSD', 'ASD'],
    ['ASD', 'SF', 'FSD', 'ML'],
    ['ML', 'SF', 'ASD', 'FSD'],
  ];
}

// app.component.html
<h2 style="text-align: center;">Weekly Time Table</h2>

<table border="1" cellpadding="10" style="margin: 0 auto; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Day / Period</th>
      <th *ngFor="let period of periods">{{ period }}</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let day of days; let i = index">
      <td>{{ day }}</td>
      <td *ngFor="let subject of timetable[i]">{{ subject }}</td>
    </tr>
  </tbody>
</table>
