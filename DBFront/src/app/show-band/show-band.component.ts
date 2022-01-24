import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band';

@Component({
	selector: 'app-show-band',
	templateUrl: './show-band.component.html',
	styleUrls: ['./show-band.component.css']
})
export class ShowBandComponent implements OnInit {

	@Input() band: Band | null = null;

	constructor() { }

	ngOnInit(): void {
	}

}
