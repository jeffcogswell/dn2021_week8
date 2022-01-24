import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from './band';

@Injectable({
	providedIn: 'root'
})
export class BandApiService {

	constructor(private http:HttpClient) { }

	// Get all
	getAll(cb: any) {
		this.http.get<Band[]>('https://localhost:44383/band').subscribe(cb); // Think about why we can just pass cb into this function
	}

	// Add one

	add(newband: Band, cb: any) {
		this.http.post<Band[]>('https://localhost:44383/band', newband).subscribe(cb);
	}

	// Delete one
	delete(id: number, cb: any) {
		this.http.delete(`https://localhost:44383/band?id=${id}`).subscribe(cb);
	}
}
