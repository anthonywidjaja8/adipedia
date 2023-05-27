import { Component, OnInit, Input } from '@angular/core';
import { emit } from 'process';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.productService.productSelected.emit(this.product);
  }

}
