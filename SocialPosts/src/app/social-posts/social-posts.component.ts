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

  newtitle: string = '';
  newthought: string = '';
  createPostVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  savePost() {
    this.posts.unshift(
      { title: this.newtitle, thought: this.newthought }
    );
    this.createPostVisible = false;
  }

  showCreateForm() {
    this.newtitle = '';
    this.newthought = '';
    this.createPostVisible = true;
  }

  deletePost() {
    alert('Deleting!');
  }

}
