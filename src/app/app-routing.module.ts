import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductsResolverService } from './products/products-resolver.service';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: '', component: HomeStartComponent},
    {path: ':id', component: HomeDetailComponent}
  ]},
  {path: 'products', component: ProductsComponent, children: [
    {path: '', component: ProductStartComponent},
    {path: 'new', component: ProductEditComponent},
    {path: ':id', component: ProductDetailComponent, resolve: [ProductsResolverService]},
    {path: ':id/edit', component: ProductEditComponent, resolve: [ProductsResolverService]},
  ]},
  {path: 'orders', component: OrdersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'user-list', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
