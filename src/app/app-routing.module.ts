import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { OrderStartComponent } from './orders/order-start/order-start.component';
import { OrdersResolverService } from './orders/orders-resolver.service';
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
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    {path: '', component: HomeStartComponent},
    {path: ':id', component: HomeDetailComponent}
  ]},
  {path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard], children: [
    {path: '', component: ProductStartComponent},
    {path: 'new', component: ProductEditComponent},
    {path: ':id', component: ProductDetailComponent, resolve: [ProductsResolverService]},
    {path: ':id/edit', component: ProductEditComponent, resolve: [ProductsResolverService]},
  ]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], children: [
    {path: '', component: OrderStartComponent},
    {path: 'new', component: OrderEditComponent},
    {path: ':id', component: OrderDetailComponent, resolve: [OrdersResolverService]},
    {path: ':id/edit', component: OrderEditComponent, resolve: [OrdersResolverService]},
  ]},
  {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
