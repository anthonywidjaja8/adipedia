import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription: Subscription;
  filterStatus = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.products = this.homeService.getProducts();
    this.subscription = this.homeService.productChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
