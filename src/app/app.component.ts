import {Component, ElementRef} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  public value = 'Hello!';
  color = 'hotpink';

  number = 30.1234567;

  myTodo = {
    name: "Wash clothes",
    done: false,
    id: 3
  };
  myTodo2 = {
    name: "Wash car",
    done: false,
    id: 4
  };

  show = true;
  todos = this.todoService.getAll();

  constructor(elementRef: ElementRef,
              private todoService: TodoService) {
    console.log(elementRef);
  }

  onClick(event: MouseEvent) {
    console.log(`${event.clientX} ${event.clientY}`);
  }

  onMouseMove(event: MouseEvent) {
    console.log(`${event.clientX} ${event.clientY}`);
  }

  onDone(todo: any) {
    console.log(todo);
  }
}
