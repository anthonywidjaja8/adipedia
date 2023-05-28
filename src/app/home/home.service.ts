import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../shared/product.model";

export class HomeService {
    productChanged = new Subject<Product[]>();
    private products: Product[] = [
        new Product(
            'Product A', 10000, 'Desc A', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Food', 'Drink']),
        new Product(
            'Product B', 20000, 'Desc B', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth']),
        new Product(
            'Product C', 30000, 'Desc C', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth'])
    ];

    getProducts() {
        return this.products.slice();
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }
}