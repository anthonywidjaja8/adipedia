import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../shared/product.model";

export class HomeService {
    productChanged = new Subject<Product[]>();
    private products: Product[] = [
        new Product(
            'Flower', 10000, 'Desc A', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Plant', 'Rose']),
        new Product(
            'Chillies', 20000, 'Desc B', 
            'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            ['Food', 'Hot']),
        new Product(
            'Camera', 30000, 'Desc C', 
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
            ['Goods', 'Nikon'])
    ];

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index];
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }
}