import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-form-posts (update)="onUpdate($event)"></app-form-posts>
    <app-post-list [posts]="posts"></app-post-list>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts: Observable<any>

  constructor(private postsService: PostsService) {
    this.reloadPosts()
  }

  reloadPosts() {
    this.postsService.getPosts()
      .subscribe(data => this.posts = data)
  }

  onUpdate(e) {
    this.postsService.insertPost(e.post)
      .subscribe(() => this.reloadPosts())
  }
}
