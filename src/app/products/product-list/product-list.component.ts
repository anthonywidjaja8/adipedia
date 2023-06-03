import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Product } from '../../shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  isLoading = false;

  constructor(private productService: ProductService, private dataStorageService: DataStorageService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.productService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
    this.products = this.productService.getProducts();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onSaveData() {
    this.isLoading = true;
    this.dataStorageService.storeProducts().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
    });
  }

  onFetchData() {
    this.isLoading = true;
    this.dataStorageService.fetchProducts().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
