import { Component } from '@angular/core';

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

  onClick(event: MouseEvent) {
    console.log(`${event.clientX} ${event.clientY}`);
  }

  onMouseMove(event: MouseEvent) {
    console.log(`${event.clientX} ${event.clientY}`);
  }
}
