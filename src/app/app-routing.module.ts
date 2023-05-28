import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent, children: [
    {path: '', component: ProductStartComponent},
    {path: 'new', component: ProductEditComponent},
    {path: ':id', component: ProductDetailComponent},
    {path: ':id/edit', component: ProductEditComponent},
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
