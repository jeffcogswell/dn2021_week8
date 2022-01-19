import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	addMode: boolean = false;
	todos: Todo[] = [
		{ task: 'first', completed: false },
		{ task: 'second', completed: true }
	];

	newTask: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	turnOnAdd() {
		this.addMode = true;
	}

	saveNew() {
		this.todos.push(
			{ task: this.newTask, completed: false }
		);
	}

	isNothingToDo() {
		if (this.todos.length == 0) {
			return true;
		}
		for (let index:number = 0; index < this.todos.length; index++) {
			if (this.todos[index].completed == false) {
				return false;
			}
		}
		return true;
	}

}
