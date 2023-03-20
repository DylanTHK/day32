# Day32 Simple Cart App

## User Interface
1. select fruits and quantity
2. add all fruits to cart
3. update order details
4. checkout


Topics Covered:
1. Event binding (child -> parent)
    - click button
    - trigger child component method
    - extract values from Form(child component) to object
    - fire object to Subject (annotated with @Output())
    - link subject to app-child tag in **parent's html**
    ```
    <app-child [subject]="parentMethod($event)"></app-child>
    ```
    - Extract event in parent method

2. Property binding (parent -> child)
    - define parent's variable
    ```
    toChild = "value String";
    ```
    - add attribute to child's component tag in **parent's html**
    ```
    <app-child [childVar]="toChild"></app-child>
    ```
    - receive value from child-component.ts
    ```
    @Input() childVar;
    ```

3. Form validation


<!-- DONE:
- add error message for Validation
- list out all items in cart
- receive valid name, address, orderList
- return confirmation details -->