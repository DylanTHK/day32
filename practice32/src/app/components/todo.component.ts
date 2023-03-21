import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task, Todo } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  // Forms
  todoForm!: FormGroup;
  taskArray!: FormArray;

  @Output()
  onSaveTodo = new Subject<Todo>();

  constructor(private fb: FormBuilder) { };

  // initialise form and group array
  ngOnInit(): void {
    this.taskArray = this.fb.array([]);
    this.todoForm = this.fb.group({
      title: this.fb.control<string>('MyList', [Validators.required]),
      name: this.fb.control<string>('D', [Validators.required]),
      // this is the formArrayName
      tasks: this.taskArray
    });
    console.info(">>> Forms initialised");
  }

  // method to add FormGroup to FormArray
  addTask() {
    const g = this.fb.group({
      description: this.fb.control<string>('sample task', [Validators.required]),
      date: this.fb.control<Date>(new Date)
    })
    this.taskArray.push(g);
    // FIXME: FOR TESTING PURPOSES
    console.info(">>> current Form state:", this.taskArray, this.todoForm);
  }

  processForm() {
    console.info(">>> processing form")
    // TODO: pass values from form group to Todo model object
    const todo = this.todoForm.value as Todo;

    // Event bind object to app component
    this.onSaveTodo.next(todo);
  }
}
