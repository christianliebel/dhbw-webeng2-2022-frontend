import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo: any;

  @Output()
  done = new EventEmitter<any>();
}
