import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Todo {
    return todo;
  }

  get(todoId: number): Todo {
    return {
      name: "Wash clothes",
      done: false,
      id: 3
    };
  }

  getAll(): Todo[] {
    return [{
      name: "Wash clothes",
      done: false,
      id: 3
    }, {
      name: "Wash car",
      done: false,
      id: 4
    }];
  }

  update(todo: Todo): void {}

  delete(todoId: number): void {}
}
