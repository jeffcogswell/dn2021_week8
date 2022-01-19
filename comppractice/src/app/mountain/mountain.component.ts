import { Component, Input, OnInit } from '@angular/core';
import { Mountain } from '../mountain';

@Component({
	selector: 'app-mountain',
	templateUrl: './mountain.component.html',
	styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {

	// This component displays a single mountain.

	@Input() mount: Mountain | null = null;
	newname: string = '';
	newnum: number = 0;
	editMode: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	turnEditOn() {
		if (this.mount) {
			this.newname = this.mount.name;
			this.newnum = this.mount.height;
		}
		this.editMode = true;
	}

	saveEdits() {
		if (this.mount) {
			this.mount.name = this.newname;
			this.mount.height = this.newnum;
		}
		this.editMode = false;
	}

	cancelEdits() {
		this.editMode = false;
	}

}
