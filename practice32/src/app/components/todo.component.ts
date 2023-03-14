import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todoForm!: FormGroup
  taskArray!: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
  }
  
  private createTodoForm(): FormGroup {
    return this.fb.group({
      taskName: this.fb.control(''),
      name: this.fb.control(''),
      tasks: this.taskArray
    })
  }
}
