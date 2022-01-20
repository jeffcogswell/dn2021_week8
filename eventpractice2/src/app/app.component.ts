import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventpractice2';
  doSomething(str: string) {
    alert(str);
  }

  doAnother(str: string) {
    console.log(str);
  }
}
