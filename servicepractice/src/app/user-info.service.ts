import { Injectable } from '@angular/core';
import { CurrentUser } from './current-user';

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	MyUser: CurrentUser = {
		username: '',
		firstname: '',
		lastname: '',
		email: ''
	}
	constructor() { }

	getCurrentUser() {
		return this.MyUser;
	}
}
