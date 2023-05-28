import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
