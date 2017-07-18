import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  posts = [
    "This is post 1",
    "This is post 2",
    "This is post 3"
  ]


  insertPost(message) {
    this.posts.push(message);
  }

  constructor() { }

}

