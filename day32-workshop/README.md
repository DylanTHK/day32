# Day32Workshop

## Using Reactive Forms
1. add ReactiveFormsModule to app.module.ts (imports)
2. add fb:FormBuilder to constructor
```
constructor(private fb:FormBuilder) { };
```
3. initialise form using FormBuilder (group and controls)
```
ngOnInit(): void {
    this.taskForm = this.fb.group({
        desc: this.fb.control('task', [Validators.required]),
        priority: this.fb.control('med', [Validators.required]),
        due: this.fb.control('', [Validators.required])
    })
}
```
4. Add form, inputs, button in html (Only one button with type="submit")
```
<form>
  <table>
    <tr>
      <td>Description: </td>
      <td>
        <input type="text">
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button type="submit">Add</button>
      </td>
    </tr>
  </table>
</form>
```

5. bind html form to FormGroup and controls
- [formGroup]="taskFrom"
- formControlName (must match with formGroup properties defined upon initialisation)
- (ngSubmit)="method()" (method to all upon submitting form)
```
<form [formGroup]="taskForm" (ngSubmit)="addTask()">
  <table>
    <tr>
      <td>Description: </td>
      <td>
        <input type="text" formControlName="desc">
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button type="submit">Add</button>
      </td>
    </tr>
  </table>
</form>
```
## Validation

1. Validation
- add html tags for error message
```
<tr>
    <td colspan="4" class="error">
    Please input date
    </td>
</tr>
```
- add derivatives to check for error in control (hides html tag when no control value is valid)
<tr *ngIf="taskForm.get('due')?.hasError('required')">
    <td colspan="4" class="error">
    Please input date
    </td>
</tr>

2. method 2: use additional method to check for invalid and pristine
- only return true when form is invalid AND form NOT pristine
```
  isControlInvalid(ctrl: string): boolean {
    const isInvalid = this.taskForm.get(ctrl)!.hasError("required");
    const isPristine = this.taskForm.get(ctrl)!.pristine;
    return (isInvalid && !isPristine);
  }
```