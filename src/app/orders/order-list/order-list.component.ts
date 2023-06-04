import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Order } from '../../shared/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  orders: Order[];
  subscription: Subscription;
  isLoading = false;
  isFetchClicked = false;

  constructor(private orderService: OrderService, private dataStorageService: DataStorageService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.orderService.ordersChanged.subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      }
    )
    this.orders = this.orderService.getOrders();
  }

  onSaveData() {
    this.isLoading = true;
    this.dataStorageService.storeOrders().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
    });
  }

  onFetchData() {
    this.isLoading = true;
    this.isFetchClicked = true;
    this.dataStorageService.fetchOrders().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
