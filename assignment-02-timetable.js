Assignment 02: Simple Timetable (Angular)
====================================

// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  schedule = [
    { time: '9:00 AM', task: 'Math Class' },
    { time: '10:00 AM', task: 'Science Class' },
    { time: '11:00 AM', task: 'Break' },
    { time: '11:30 AM', task: 'English Class' },
    { time: '1:00 PM', task: 'Lunch' }
  ];
}

// app.component.html
<h2>My Timetable</h2>
<table border="1">
  <tr><th>Time</th><th>Task</th></tr>
  <tr *ngFor="let s of schedule">
    <td>{{ s.time }}</td>
    <td>{{ s.task }}</td>
  </tr>
</table>
