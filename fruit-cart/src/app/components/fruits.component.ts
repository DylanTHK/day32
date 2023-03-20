import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Fruit, FruitOrder } from '../model';
import { INVENTORY } from '../constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit{
  
  // list of all available fruits
  allFruits = INVENTORY

  fruitForm!: FormGroup

  controlInvalid: boolean = false;

  // event binding to app.component.html
  @Output()
  addNewFruit = new Subject<FruitOrder>()

  constructor(private fb: FormBuilder) { }

  // initialisation setup
  ngOnInit(): void {
    // console.info(">>> All Fruits: ", this.allFruits)
    this.fruitForm = this.fb.group({
      // FIXME: RESET VALUES TO '' and 0
      item: this.fb.control<string>('apple', [Validators.required]),
      unitPrice: this.fb.control<number>(.3, [Validators.required]),
      qty: this.fb.control<number>(1, [Validators.required])
    })
    // console.info(">>> Fruit Form: ", this.fruitForm);
  }

  // pass form group to component.html
  addOrder(order: FruitOrder) {
    console.info(">>> adding fruits");
    // extract form values
    console.info(">>> fruit order:", order)
    this.addNewFruit.next(order)
  }

  // check for valid form
  processOrder() {
    if (this.fruitForm.invalid) {
      this.controlInvalid = true;
      return;
    }
    // const order = this.fruitForm.value as FruitOrder;
    const order: FruitOrder = {
      item: this.fruitForm.get("item")?.value,
      unitPrice: this.fruitForm.get("unitPrice")?.value,
      qty: this.fruitForm.get("qty")?.value
    }
    this.fruitForm.get("item")?.setValue('');
    this.fruitForm.get("unitPrice")?.setValue(0);
    this.fruitForm.get("qty")?.setValue(1);
    this.controlInvalid = false;
    this.addOrder(order);
  }

  isControlInvalid(ctrlName: string): boolean {
    const ctrl = this.fruitForm.get(ctrlName) as FormControl;
    return ctrl.invalid && (!ctrl.pristine);
  }

  // update form with selected fruit
  selectFruit(fruit: Fruit) {
    const itemCtrl = this.fruitForm.get("item");
    const priceCtrl = this.fruitForm.get("unitPrice");
    itemCtrl?.setValue(fruit.name);
    priceCtrl?.setValue(fruit.unitPrice);
  }
}
