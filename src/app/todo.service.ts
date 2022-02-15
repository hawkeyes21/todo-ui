import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {

  }

  save(todo: Todo) {
    return this.httpClient.post<Todo>("http://localhost:8080/todos", todo);
  }

  get_open_todos() {
    return this.httpClient.get<Todo[]>("http://localhost:8080/todos/open");
  }

  get_closed_todos() {
    return this.httpClient.get<Todo[]>("http://localhost:8080/todos/closed");
  }
}
