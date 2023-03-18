import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart, FruitOrder } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  // to hold cart details
  cartForm!: FormGroup;

  // to store all fruits
  allOrders: FruitOrder[] = [];

  @Input()
  fruit!: FruitOrder;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.info(">>> initialising cart component")
    this.cartForm = this.fb.group({
      // FIXME: remove default values 
      customerName: this.fb.control<string>('sampleName', [ Validators.required ]),
      address: this.fb.control<string>('address', [ Validators.required ]),
      delivery: this.fb.control<string>('am', )
    })
  }
  
  checkoutCart() {
    console.info(">>> inserted Fruit Value: ", this.fruit)
  }

}
