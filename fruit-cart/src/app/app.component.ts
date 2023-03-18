import { Component, Input } from '@angular/core';
import { Cart, Fruit, FruitOrder } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fruit-cart';
  cart!: Cart;
  fruitList: FruitOrder[] = [];

  // variable (accessible by app.component.html)
  fruitOrder!: FruitOrder;

  // method to receive and process fruit order (from fruits.component)
  addFruitToCart(order: FruitOrder) {
    console.info(">>> received in app-component: ", order)
    this.fruitList.push(order);
    // check if fruit exists in fruitList
    // if(contains) {
    //   // if exists, add quantity

    // } else {
    //   // else add fruit to list
    //   this.fruitList.push(fObj)
    // }

    console.info(">>> Fruit List:" + this.fruitList)
    
  }


}
