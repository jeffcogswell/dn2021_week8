import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
