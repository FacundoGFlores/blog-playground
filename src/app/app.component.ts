import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    <app-simple-form (update)="onUpdate($event)"></app-simple-form>
    <ul>
      <li *ngFor="let post of posts.posts">
        {{post}}
      </li>
    </ul>
  </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private posts: PostsService) {

  }

  onUpdate(e) {
    this.posts.posts.push(e.post)
  }
}
