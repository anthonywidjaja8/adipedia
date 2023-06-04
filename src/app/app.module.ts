import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserListService } from './user-list/user-list.service';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { HomeService } from './home/home.service';
import { HomeItemComponent } from './home/home-list/home-item/home-item.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { ProductService } from './products/product.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ReportService } from './reports/report.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    UserListComponent,
    UserEditComponent,
    DropdownDirective,
    ProductStartComponent,
    ProductEditComponent,
    HomeComponent,
    OrdersComponent,
    ReportsComponent,
    HomeListComponent,
    HomeDetailComponent,
    HomeItemComponent,
    HomeStartComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HomeService, 
    ProductService, 
    ReportService,
    UserListService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
