import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entry: number = 0;

  title = 'truefalse';

  go() {
    console.log('Here is what they typed:');
    console.log(this.entry);
    if (this.entry != null) {
      alert('Thank you for your choice!');
    }
    else {
      alert('Please enter something!');
    }
  }
}
