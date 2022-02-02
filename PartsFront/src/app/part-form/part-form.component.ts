import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { PartApiService } from '../part-api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-part-form',
	templateUrl: './part-form.component.html',
	styleUrls: ['./part-form.component.css']
})
export class PartFormComponent implements OnInit {

	part: Part = {
		id: 0,
		name: '',
		description: '',
		inventory: 0,
		onsale: false
	};

	constructor(private partapi:PartApiService, private router:Router) { }

	ngOnInit(): void {
	}

	savePart() {
		this.partapi.add(this.part, 
			() => {
				console.log('returning to home!!');
				this.router.navigate(['/']);
			}
		);
	}

}
