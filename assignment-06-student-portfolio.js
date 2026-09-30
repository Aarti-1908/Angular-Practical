Assignment 06: Student Portfolio
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
  title = 'portfolio';
  student = {
    name: 'Santosh Pandure',
    title: 'Full Stack Developer',
    bio: `Passionate developer with experience in Angular, Node.js, and modern web technologies.`,
    skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    projects: [
      {
        name: 'Portfolio Website',
        description: 'A personal website to showcase my work and skills.',
        link: 'https://santoshpandure',
      },
      {
        name: 'Task Manager App',
        description: 'A task management app built with Angular and Firebase.',
        link: 'https://github.com/johndoe/task-manager',
      },
    ],
    contact: {
      email: 'santosh123@gmail.com',
      phone: '+1-234-567-890',
      linkedin: 'https://linkedin.com/in/santoshpandure',
      github: 'https://github.com/santoshpandure',
    },
  };
}

// app.component.html
<div class="portfolio-container">
  <header>
    <h1>{{ student.name }}</h1>
    <h3>{{ student.title }}</h3>
  </header>

  <section class="bio">
    <h2>About Me</h2>
    <p>{{ student.bio }}</p>
  </section>

  <section class="skills">
    <h2>Skills</h2>
    <ul>
      <li *ngFor="let skill of student.skills">{{ skill }}</li>
    </ul>
  </section>

  <section class="projects">
    <h2>Projects</h2>
    <div *ngFor="let project of student.projects" class="project-card">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <a href="{{ project.link }}" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </section>

  <section class="contact">
    <h2>Contact</h2>
    <ul>
      <li>Email: <a href="mailto:{{ student.contact.email }}">{{ student.contact.email }}</a></li>
      <li>Phone: {{ student.contact.phone }}</li>
      <li>LinkedIn: <a href="{{ student.contact.linkedin }}" target="_blank" rel="noopener noreferrer">Profile</a></li>
      <li>GitHub: <a href="{{ student.contact.github }}" target="_blank" rel="noopener noreferrer">Repositories</a></li>
    </ul>
  </section>
</div>

// app.component.css
.portfolio-container {
  max-width: 800px;
  margin: 30px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

header h1 {
  margin-bottom: 0;
  font-size: 2.8rem;
  color: #2c3e50;
}

header h3 {
  margin-top: 5px;
  font-weight: normal;
  color: #7f8c8d;
}

section {
  margin-top: 30px;
}

.skills ul, .contact ul {
  list-style-type: none;
  padding: 0;
}

.skills li, .contact li {
  background-color: #ecf0f1;
  display: inline-block;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 4px;
}

.project-card {
  background-color: #f9f9f9;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}

.project-card h3 {
  margin-top: 0;
}

.project-card a {
  color: #2980b9;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}
