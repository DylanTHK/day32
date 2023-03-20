import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { Cart, FruitOrder } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  // to hold cart details
  cartForm!: FormGroup;

  // to update fruitList from parent
  @Input()
  allOrders: FruitOrder[] = [];

  @Output()
  onCheckout = new Subject<Cart>();

 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.info(">>> initialising cart component");
    console.info(">>> fruitList Contents: ", this.allOrders);
    // initialise form group
    this.cartForm = this.fb.group({
      // FIXME: remove default values 
      customerName: this.fb.control<string>('sampleName', [ Validators.required ]),
      address: this.fb.control<string>('address', [ Validators.required ]),
      delivery: this.fb.control<string>('am', )
    })
  }
  
  // method to event bind to parent
  checkoutCart() {
    console.info(">>> inserted Fruit Value: ", this.allOrders)
    // extract form values
    const cart: Cart = {
      customerName: this.cartForm.get("customerName")?.value,
      address: this.cartForm.get("address")?.value,
      delivery: this.cartForm.get("delivery")?.value,
      orders: this.allOrders
    }
    console.info(">>> Firing cart:", cart);
    // fire cart to parent
    this.onCheckout.next(cart);

    // reset fields
    this.cartForm.reset();
    this.allOrders = [];
  }

}
