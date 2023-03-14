import { Component } from '@angular/core';
import { Cart, Fruit } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fruit-cart'
  displayFruits = true
  displayCart = false
  cart!: Cart 
  fruitList: Fruit[] = []

  processFruit(fObj: Fruit) {
    console.info(">>>received: ", fObj)
    let contains: boolean = this.containsFruit(fObj, this.fruitList)

    // check if fruit exists in fruitList
    if(contains) {
      // if exists, add quantity

    } else {
      // else add fruit to list
      this.fruitList.push(fObj)
    }

    console.info(">>> Fruit List:" + this.fruitList)
    
  }

  containsFruit(f: Fruit, fList: Fruit[]): boolean {
    for(let i = 0; i < this.fruitList.length; i++) {
      if (f.name === fList[i].name) {
        return true
      }
    }
    return false
  }

}
