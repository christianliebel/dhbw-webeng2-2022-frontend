import {Component, ElementRef} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private authService: AuthService) {
  }

  login() {
    this.authService.loginWithRedirect();
  }

  getList() {
    this.todoService.getAll().subscribe(todos => this.todos = todos);
  }

  addTodo(name: string) {
    this.todoService.create({ name, done: false })
      .subscribe(() => this.getList());
  }
}
