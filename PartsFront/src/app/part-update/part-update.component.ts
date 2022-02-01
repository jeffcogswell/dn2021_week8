import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../part';
import { PartApiService } from '../part-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-part-update',
  templateUrl: './part-update.component.html',
  styleUrls: ['./part-update.component.css']
})
export class PartUpdateComponent implements OnInit {

  @Input() part: Part = {
    id: 0,
    name: '',
    description: '',
    inventory: 0,
    onsale: false
  };

  constructor(private partapi:PartApiService, private loc:Location) { }

  ngOnInit(): void {
  }

  updatePart() {
		this.partapi.update(this.part, 
			() => {
				this.loc.go('/');
			}
		);    
  }

}
