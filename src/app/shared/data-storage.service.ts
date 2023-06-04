import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Product } from "./product.model";
import { ProductService } from "../products/product.service";
import { AuthService } from "../auth/auth.service";
import { UserListService } from "../user-list/user-list.service";
import { User } from "../user-list/user-list.model";
import { Report } from "../reports/report.model";
import { OrderService } from "../orders/order.service";
import { Order } from "./order.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private productService: ProductService, private orderService: OrderService,
        private userListService: UserListService, private authService: AuthService) {}

    storeProducts() {
        const products = this.productService.getProducts();
        return this.http
            .put(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
                products);
    }

    fetchProducts() {
        return this.http.get<Product[]>(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
        )
        .pipe(
            map(products => {
                return products.map(product => {
                    return {...product, categories: product.categories ? product.categories : []};
                });
            }), 
            tap(products => {
                this.productService.setProducts(products);
            })
        );
    }

    storeOrders() {
        const orders = this.orderService.getOrders();
        return this.http
            .put(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
                orders);
    }

    fetchOrders() {
        return this.http.get<Order[]>(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json'
        )
        .pipe(
            map(orders => {
                return orders.map(order => {
                    return {...order, products: order.products ? order.products : []};
                });
            }), 
            tap(orders => {
                this.orderService.setOrders(orders);
            })
        );
    }

    fetchReports() {
        return this.http.get<Report[]>(
            'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/reports.json'
        );
    }

    storeUsers(users: User[]) {
        //const users = this.userListService.getUsers();
        console.log(users);
        return this.http
            .put(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
                users);
    }

    fetchUsers() {
        return this.http.get<User[]>(
                'https://adipedia-product-list-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
        );
        // .pipe(
        //     tap(users => {
        //         this.userService.setUsers(users);
        //     })
        // );
    }

}