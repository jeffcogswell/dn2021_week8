import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Output() myevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    // Automatically send event to parent
    this.myevent.emit('hello');
  }

}
