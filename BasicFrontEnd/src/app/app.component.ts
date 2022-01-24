import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CurrentUser } from './current-user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'BasicFrontEnd';

	MyUser: CurrentUser = {
		username: '',
		firstname: '',
		lastname: '',
		email: ''
	};

	constructor(private http:HttpClient) {}

	getUser() {
		// https://localhost:44394/user

		this.http.get<CurrentUser>('https://localhost:44394/user').subscribe(
			(result) => {
				// Be careful here! If we have a service with a "global" user,
				// we would want to fill in the fields one-by-one rather than
				// just copy the object over. For this quick example, though,
				// we're safe.
				this.MyUser = result;
			}
		)

	}
}
