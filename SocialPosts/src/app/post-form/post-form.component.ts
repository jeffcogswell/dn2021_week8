import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  newtitle: string = '';
  newthought: string = '';

  @Output() newpost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  savePost() {
    let post:Post = { title: this.newtitle, thought: this.newthought };
    this.newpost.emit(post);

  }

}
