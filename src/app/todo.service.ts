import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Observable<Todo> {
    return of(todo);
  }

  get(todoId: number): Observable<Todo> {
    return of({
      name: "Wash clothes",
      done: false,
      id: 3
    });
  }

  getAll(): Observable<Todo[]> {
    return of([{
      name: "Wash clothes",
      done: false,
      id: 3
    }, {
      name: "Wash car",
      done: false,
      id: 4
    }]);
  }

  update(todo: Todo): Observable<void> {
    return of(undefined);
  }

  delete(todoId: number): Observable<void> {
    return of(undefined);
  }
}
