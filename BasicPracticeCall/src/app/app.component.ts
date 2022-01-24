import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'BasicPracticeCall';

	constructor(private http: HttpClient) {

		this.http.get<any>('https://localhost:44394/user').subscribe(
			(result) =>
			{
				console.log(result);
			}
		);


	}
}
