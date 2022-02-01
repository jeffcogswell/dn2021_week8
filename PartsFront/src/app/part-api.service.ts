import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from './part';

@Injectable({
	providedIn: 'root'
})
export class PartApiService {

	constructor(private http:HttpClient) { }

	getAll(cb: any) {
		this.http.get<Part[]>('https://localhost:44377/part').subscribe(cb);
	}

	add(part: Part, cb: any) {
		this.http.post<Part>('https://localhost:44377/part', part).subscribe(cb);
	}
	
	update(part: Part, cb: any) {
		this.http.put<Part>('https://localhost:44377/part', part).subscribe(cb);
	}
}
