export interface Fruit {
    name: string
    unitPrice: number
    image: string
}

export interface FruitOrder {
    item: string
    unitPrice: number
    qty: number
}

export interface Cart {
    customerName: string
    address: string
    delivery: string
    orders: FruitOrder[]
}

