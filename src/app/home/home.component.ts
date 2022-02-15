import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Open Todo';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.get_open_todos().subscribe(todos => this.todos = todos);
  }

  onSubmit(form: NgForm) {
    let todo: Todo = {title: form.value.title, status: "OPEN"};
    this.todoService.save(todo).subscribe(todo => {
      console.log("Saved", todo);
      this.todos.push(todo);
    });
  }

  fieldsChange(values: any) {
    let todo: Todo = {id: values.id, title: values.title, status: values.status};
    this.todoService.mark_a_open_todo_as_close(todo).subscribe(todo => {
      console.log(todo.id, "\t", todo.title, "\t", todo.status);
      this.ngOnInit();
    });
  }
}
