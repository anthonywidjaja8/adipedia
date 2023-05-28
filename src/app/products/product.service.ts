import { Injectable } from "@angular/core";
import { HomeService } from "../home/home.service";
import { Product } from "../shared/product.model";

@Injectable()
export class ProductService {

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
            ['Goods', 'Cloth']),
        new Product(
            'Product D', 40000, 'Desc D', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth']),
        new Product(
            'Product E', 50000, 'Desc E', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth'])
    ];
    
    constructor(private homeService: HomeService) {}

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index];
    }

    addProductToHome(product: Product) {
        this.homeService.addProduct(product);
    }
}