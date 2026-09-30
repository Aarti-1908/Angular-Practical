Assignment 04: Student List (Array)
====================================

// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  studentNames: string[] = [
    'Amit', 'Sneha', 'Rahul', 'Pooja', 'Ravi',
    'Neha', 'Suresh', 'Kiran', 'Anjali', 'Vijay'
  ];
}

// app.component.html
<h2>List of Students</h2>
<ul>
  <li *ngFor="let name of studentNames">
    {{ name }}
  </li>
</ul>
