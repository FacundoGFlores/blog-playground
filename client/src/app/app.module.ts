import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { FormPostsComponent } from './form-posts/form-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    FormPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
