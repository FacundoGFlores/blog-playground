import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-form-posts (update)="onUpdate($event)"></app-form-posts>
    <app-post-list (deletePost)="onDeletePost($event)" [posts]="posts"></app-post-list>
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

  onUpdate(message) {
    this.postsService.insertPost(message)
      .subscribe(() => this.reloadPosts())
  }

  onDeletePost(e) {
    this.postsService.deletePost(e.id)
      .subscribe(() => this.reloadPosts())
  }
}
