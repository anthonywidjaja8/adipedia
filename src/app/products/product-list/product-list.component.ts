import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[] = [
    new Product('Product A', 10000, 'Product Desc', 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Product('Product B', 10000, 'Product Desc', 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }

}
