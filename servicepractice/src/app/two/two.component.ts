import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../current-user';
import { UserInfoService } from '../user-info.service';

@Component({
	selector: 'app-two',
	templateUrl: './two.component.html',
	styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

	MyUser: CurrentUser;
	constructor(private userinfo: UserInfoService) {
		this.MyUser = userinfo.getCurrentUser();
	}

	ngOnInit(): void {
	}

}
