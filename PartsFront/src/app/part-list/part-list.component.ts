import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { PartApiService } from '../part-api.service';

@Component({
	selector: 'app-part-list',
	templateUrl: './part-list.component.html',
	styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

	showEditForm: boolean = false;
	editPart: Part = {
		id: 0,
		name: '',
		description: '',
		inventory: 0,
		onsale: false		
	};

	parts: Part[] = [];

	constructor(private partapi: PartApiService) {
		console.log('Recreating ParListComponent!')
		this.refreshList();
		// If we wanted to update automatically we could do this:
		/*
		setInterval(
			()=> {
				console.log('update');
				this.refreshList()
			},
		500);*/
	}

	ngOnInit(): void {
	}

	refreshList() {
		this.partapi.getAll(
			(result: Part[]) => {
				this.parts = result;
			}
		);
	}

	editItem() {
		//this.loc.go('/edit');
		this.showEditForm = true;
	}

}
