import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../current-user';
import { UserInfoService } from '../user-info.service';

@Component({
	selector: 'app-one',
	templateUrl: './one.component.html',
	styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

	MyUser: CurrentUser;
	constructor(private userinfo: UserInfoService) {
		this.MyUser = userinfo.getCurrentUser();
	}

	ngOnInit(): void {
	}

}
