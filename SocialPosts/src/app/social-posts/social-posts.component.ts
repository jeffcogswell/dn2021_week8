import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    { title: 'first', thought: 'some thoughts' },
    { title: 'second', thought: 'more thoughts' }
  ];

  createPostVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCreateForm() {
    this.createPostVisible = true;
  }

  deletePost(thepost: Post) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] == thepost) {
        // remove it 
        this.posts.splice(i, 1);
        // and get out of the function altogether
        return;
      }
    }
  }

  savePost(post: Post) {
    this.posts.push(post);
  }

}
