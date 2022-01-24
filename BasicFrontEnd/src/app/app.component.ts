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

	newUsername: string = '';
	newFirstname: string = '';
	newLastname: string = '';
	newEmail: string = '';

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
		);
	}

	postUser() {
		let tempObj: CurrentUser = {
			username: this.newUsername,
			firstname: this.newFirstname,
			lastname: this.newLastname,
			email: this.newEmail
		};
		this.http.post<CurrentUser>('https://localhost:44394/user', tempObj).subscribe(
			(result: any) => {
				this.MyUser = result;
			}
		);
	}
}


/*


	New Address:

	Street: 529 Avon ST______
	City:   Lansing__________
	State:  MI
	Zip:    48910-1701

	[SAVE]

		Click Save:
			The browser-app does a POST to Amazon with the address
			Amazon's server side software "cleanses" the address by adding the 4 digits
				to the zip code
			Amazon's server saves the data into the database
			Amazon's server sends the updated data back to the browser app
			Browser app receives it and rewrites the corrected address on the screen


*/