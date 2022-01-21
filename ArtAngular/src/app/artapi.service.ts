import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class ArtapiService {

	getArt(cb: any) {
		var req = this.http.get<any>('https://api.artic.edu/api/v1/artworks?limit=10');
		req.subscribe(cb);
	}

	constructor(private http: HttpClient) { }
}
