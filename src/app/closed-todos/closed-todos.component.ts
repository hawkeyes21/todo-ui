import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-closed-todos',
  templateUrl: './closed-todos.component.html',
  styleUrls: ['./closed-todos.component.css']
})
export class ClosedTodosComponent implements OnInit {
  title = 'Closed Todo';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.get_closed_todos().subscribe(todos => this.todos = todos);
  }

}
