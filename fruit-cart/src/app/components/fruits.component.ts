import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Fruit } from '../model';
import { INVENTORY } from '../constants';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  currentFruit?: Fruit

  allFruits = INVENTORY

  @Input()
  displayForm = false;

  @Output()
  addNewFruit = new Subject<Fruit>()

  addFruit() {
    const newFruit = this.currentFruit
    this.addNewFruit.next(newFruit!)
    console.info(">>> adding fruits")
  }
   
  showForm(name: string) {
    this.displayForm = true
    this.currentFruit = this.allFruits.find((fruit) => fruit.name === name)
    console.log(">>> current fruit: " + this.currentFruit!.name)
  }
}
