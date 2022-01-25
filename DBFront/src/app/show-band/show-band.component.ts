import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Band } from '../band';

@Component({
	selector: 'app-show-band',
	templateUrl: './show-band.component.html',
	styleUrls: ['./show-band.component.css']
})
export class ShowBandComponent implements OnInit {

	@Input() band: Band | undefined = undefined;

	@Output() deleteme: EventEmitter<Band>
		= new EventEmitter<Band>();

	constructor() { }

	ngOnInit(): void {
	}

	emitDeleteEvent() {
		this.deleteme.emit(this.band);
	}

}
