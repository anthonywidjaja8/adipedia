import { EventEmitter } from "@angular/core";
import { Product } from "./product.model";

export class ProductService {
    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product(
            'Product A', 10000, 'Desc A', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Food', 'Drink']),
        new Product(
            'Product B', 20000, 'Desc B', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth'])
    ];
    
    getProducts() {
        return this.products.slice();
    }
}