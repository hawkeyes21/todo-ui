import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClosedTodosComponent} from "./closed-todos/closed-todos.component";
import {OpenTodosComponent} from "./open-todos/open-todos.component"; // CLI imports router

const routes: Routes = [
  { path: 'closed', component: ClosedTodosComponent},
  { path: 'open', component: OpenTodosComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
