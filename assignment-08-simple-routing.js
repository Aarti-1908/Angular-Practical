Assignment 08: Simple Routing Demo
====================================

// setup
ng new myApp --routing
ng generate component about
ng generate component home
ng generate component contact-us

// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingapp';
}

// app.component.html
<h1>Simple Angular Routing App</h1>

<nav>
  <a routerLink="">Home</a> |
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>

<hr />

<router-outlet></router-outlet>

// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
