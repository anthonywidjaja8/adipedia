import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Order } from "../shared/order.model";

@Injectable()
export class OrderService {
    ordersChanged = new Subject<Order[]>();
    
    private orders: Order[] = [
        new Order(
            'O001', '01-Jun-2023', 'Buyer A', 
            'Waiting', 'R001',
            ['Product A', 'Product B']),
        new Order(
            'O002', '02-Jun-2023', 'Buyer B', 
            'On Delivery', 'R002',
            ['Product C', 'Product D']),
        new Order(
            'O003', '03-Jun-2023', 'Buyer C', 
            'On Delivery', 'R003',
            ['Product E', 'Product F']),
        new Order(
            'O004', '04-Jun-2023', 'Buyer D', 
            'Waiting', 'R004',
            ['Product G', 'Product H'])
    ];
    
    //private orders: Order[] = [];
    
    constructor() {}

    setOrders(orders: Order[]) {
        this.orders = orders;
        this.ordersChanged.next(this.orders.slice());
    }

    getOrders() {
        return this.orders.slice();
    }

    getOrder(index: number) {
        return this.orders[index];
    }

    addOrder(order: Order) {
        this.orders.push(order);
        this.ordersChanged.next(this.orders.slice());
    }

    updateOrder(index: number, newOrder: Order) {
        this.orders[index] = newOrder;
        this.ordersChanged.next(this.orders.slice());
    }

    deleteOrder(index: number) {
        this.orders.splice(index, 1);
        this.ordersChanged.next(this.orders.slice());
    }

}