# Practice32

## User Interface

## Topics covered
1. FormGroup & Form Array (Initialising)

component.ts
```
// initialise variable for form group
formArray!: FormArray;
form!: FormGroup;


// initilialise form array inside form group
ngOnInit(): void {
    this.todoForm = this.fb.group({
        this.formArray = this.fb.array([]);
        item1: this.fb.control<T>('{initial_form_value}', [{validators_here}]),
        item2: this.fb.control<T>('{initial_form_value}', [{validators_here}]),
        // html formArray name must match - "array"
        array: this.formArray
    })
}
```
component.html
```
// for form group
<form [formGroup]="form" (ngSubmit)="processMethod()">
    //binds input to formGroup's control
    <input type="text" formControlName="name">

    //binds formArray to array inside of formGroup (name must match attribute when initialised - "array")
    <div [formArray]="array; let idx=index" [formGroupName]="idx" >
        <input type="text" formControlName="desc">
    </div>

    //binded to (ngSubmit) of formGroup
    <button type="submit"> Save </button>

</form>
```
2. Deleting at index
component.html
```
<button type="button" (click)="deleteTask(idx)"> X </button>
```
component.ts
```
// remove form array element by index
deleteTask(idx: number) {
    formArray.removeAt(idx);
}
```

3. EventBinding (data: child -> parent)
```
@Output()
onSaveTodo = new Subject<Todo>();

onSaveTodo.next(todoValues)
```