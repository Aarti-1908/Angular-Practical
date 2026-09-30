Assignment 09: Route Parameters Demo
====================================

// setup
ng new angular-route-params-demo
cd angular-route-params-demo
ng generate component home
ng generate component user

// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent }
];

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
  title = 'angular-route-params-demo';
}

// app.component.html
<h2>Angular Route Parameters Demo</h2>

<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/user/101">User 101</a> |
  <a routerLink="/user/202">User 202</a> |
  <a routerLink="/user/203">User 203</a>
</nav>

<hr />

<router-outlet></router-outlet>

// user.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
