import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Band } from '../band';

@Component({
	selector: 'app-add-band',
	templateUrl: './add-band.component.html',
	styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {

	newband: Band = {
		id: 0,
		name: '',
		bestalbum: '',
		members: 0,
		founded: 0
	};

	@Output() addband: EventEmitter<Band> =
		new EventEmitter<Band>();

	constructor() { }

	ngOnInit(): void {
	}

	addBand() {
		this.addband.emit(this.newband);
	}

}
