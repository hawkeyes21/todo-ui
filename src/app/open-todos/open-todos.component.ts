import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-open-todos',
  templateUrl: './open-todos.component.html',
  styleUrls: ['./open-todos.component.css']
})
export class OpenTodosComponent implements OnInit {
  title = 'Open Todo';
  todos: Todo[] = [];


  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.get_open_todos().subscribe(todos => this.todos = todos);
  }

}
