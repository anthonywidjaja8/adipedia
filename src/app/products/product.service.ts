import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HomeService } from "../home/home.service";
import { Product } from "../shared/product.model";

@Injectable()
export class ProductService {
    productsChanged = new Subject<Product[]>();
    /*
    private products: Product[] = [
        new Product(
            'Product D', 40000, 'Desc D', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth']),
        new Product(
            'Product E', 50000, 'Desc E', 
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ['Goods', 'Cloth'])
    ];
    */
    private products: Product[] = [];
    constructor(private homeService: HomeService) {}

    setProducts(products: Product[]) {
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index];
    }

    addProductToHome(product: Product) {
        this.homeService.addProduct(product);
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
    }

    updateProduct(index: number, newProduct: Product) {
        this.products[index] = newProduct;
        this.productsChanged.next(this.products.slice());
    }

    deleteProduct(index: number) {
        this.products.splice(index, 1);
        this.productsChanged.next(this.products.slice());
    }

}