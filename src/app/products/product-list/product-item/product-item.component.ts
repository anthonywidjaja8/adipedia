import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  ngOnInit(): void {
  }

}
