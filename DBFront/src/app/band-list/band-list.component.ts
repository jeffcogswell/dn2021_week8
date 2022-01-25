import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandApiService } from '../band-api.service';

@Component({
	selector: 'app-band-list',
	templateUrl: './band-list.component.html',
	styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

	allbands: Band[] = [];
	constructor(private bandapi:BandApiService) {
		this.refreshList();
	}

	ngOnInit(): void {
	}

	refreshList() {
		this.bandapi.getAll(
			(results: any) => {
				console.log('Results!');
				console.log(results);
				this.allbands = results;
			}
		);
	}

	deleteBand(whichband: Band) {
		let index: any = this.allbands.findIndex(
			(band) => {
				return band == whichband
			}
		);

		console.log(index);

		// Or if you prefer, shorter version:
		// let index: any = this.allbands.find( band => band == whichband );

		if (index > -1) {
			this.allbands.splice(index, 1);
		}
	}

}
