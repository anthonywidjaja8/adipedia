import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Product } from "./product.model";
import { ProductService } from "../products/product.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private productService: ProductService,
        private authService: AuthService) {}

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
}