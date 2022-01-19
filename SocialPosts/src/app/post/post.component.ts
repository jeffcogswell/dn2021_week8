import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() thepost: Post = {
    title: 'test title',
    thought: 'test thought'
  };

  @Output() delete = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe() {
    this.delete.emit(this.thepost);
  }

}
