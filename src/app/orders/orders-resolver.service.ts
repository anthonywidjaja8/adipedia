import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

import { Order } from "../shared/order.model";
import { OrderService } from "./order.service";

@Injectable({providedIn: 'root'})
export class OrdersResolverService implements Resolve<Order[]> {
    constructor(private dataStorageService: DataStorageService,
        private ordersService: OrderService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Order[] | Observable<Order[]> | Promise<Order[]> {
        const orders = this.ordersService.getOrders();

        if(orders.length === 0) {
            return this.dataStorageService.fetchOrders();
        } else {
            return orders;
        }
    }
}