import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  name: string = 'Nothing';
  @Output() showname: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickMe() {
    // After they click the Click Me button, the real
    // event stuff starts happening.
    this.showname.emit(this.name);
  }

}
