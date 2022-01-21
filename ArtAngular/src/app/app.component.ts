import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtapiService } from './artapi.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ArtAngular';

	artdata:any = null;

	// "Dependency Injection"
	constructor(private http: HttpClient, private artapi:ArtapiService) { }

	loadData() {

		this.artapi.getArt(
			(result: any) => {
				this.artdata = result;
			}
		);

		/*
		var req = this.http.get<any>('https://api.artic.edu/api/v1/artworks?limit=10');
		req.subscribe(
			result => {
				console.log(result);
				this.artdata = result;
			}
		);*/
	}
}
