import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List App';

  saveTodo(todo: Todo) {
    console.info("Saving Todo List");
    console.info(">>> Todo List:", todo);
  }

}
