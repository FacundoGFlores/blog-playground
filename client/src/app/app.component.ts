import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    <app-simple-form (update)="onUpdate($event)"></app-simple-form>
    <ul>
      <li *ngFor="let post of posts">
        {{post.message}}
      </li>
    </ul>
  </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts: Observable<any>

  constructor(private postsService: PostsService) {
    postsService.getPosts()
      .subscribe(data => this.posts = data)
  }

  onUpdate(e) {
    this.postsService.insertPost(e.post);
  }
}
