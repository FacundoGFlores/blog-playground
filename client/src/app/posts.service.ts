import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../src/environments/environment';

const urlBackend: string = environment.urlAPI;


@Injectable()
export class PostsService {

  posts = [
    "This is post 1",
    "This is post 2",
    "This is post 3"
  ]

  constructor(private http: Http) { }

  getPosts(): Observable<any> {
    return this.http.get(`${urlBackend}/posts`)
      .map((response: Response) => response.json())
      .catch((err: Response) => Observable.throw(err.status))
  }

  insertPost(message) {
    return this.http.post(`${urlBackend}/posts`, { message: message })
  }
}

