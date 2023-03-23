import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Day32 Workshop Todo List';

  taskForm!: FormGroup;

  tasks: Task[] = []

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
      this.taskForm = this.fb.group({
        desc: this.fb.control('task', [Validators.required]),
        priority: this.fb.control('med', [Validators.required]),
        due: this.fb.control('', [Validators.required])
      })
  }

  addTask() {
    const task = this.taskForm.value as Task;
    
    // resets form
    this.taskForm = this.fb.group({
      desc: this.fb.control('', [Validators.required]),
      priority: this.fb.control('med', [Validators.required]),
      due: this.fb.control('', [Validators.required])
    });
    this.tasks.push(task);
    console.info(">>> Task Form Values", task);
  }

  deleteTask(idx: number) {
    this.tasks.splice(idx, 1);
  }

  isControlInvalid(ctrl: string): boolean {
    const isInvalid = this.taskForm.get(ctrl)!.hasError("required");
    const isPristine = this.taskForm.get(ctrl)!.pristine;
    return (isInvalid && !isPristine);
  }
}
