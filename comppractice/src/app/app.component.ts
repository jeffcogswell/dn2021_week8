import { Component } from '@angular/core';
import { Mountain } from './mountain';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'comppractice';
	mountains: Mountain[];

	constructor() {
		this.mountains = [
			{ name: 'Kilimanjaro', height: 19341 },
			{ name: 'Everest', height: 29029 },
			{ name: 'Denali', height: 20310 }			
		];
	}
}
