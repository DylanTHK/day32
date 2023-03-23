import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../model';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent {
  componentTitle = "My Tasks"

  @Input()
  taskList: Task[] = [];

  @Output()
  onDelete = new Subject<number>();

  deleteTask(idx: number) {
    this.onDelete.next(idx);
  }


}
