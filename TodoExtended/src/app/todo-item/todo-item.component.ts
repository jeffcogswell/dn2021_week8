import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input() item: Todo = { task: '', completed: false };
	constructor() { }

	ngOnInit(): void {
	}

	setComplete() {
		this.item.completed = true;
	}

	removeFromList() {
		// Send a "message" up to the parent component
		// asking the parent component to "delete me".
	}

}
