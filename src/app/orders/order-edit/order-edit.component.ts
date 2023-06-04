import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  id: number;
  editMode = false;
  orderForm: FormGroup;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode= params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    /*
    const newOrder = new Order(this.orderForm.value['name'], 
    this.orderForm.value['price'], this.orderForm.value['imagePath'],
    this.orderForm.value['description'], this.orderForm.value['categories']);
    */
    if(this.editMode) {
      this.orderService.updateOrder(this.id, this.orderForm.value);
    } else {
      this.orderService.addOrder(this.orderForm.value);
    }
    this.onCancel();
  }

  onAddProduct() {
    (<FormArray>this.orderForm.get('products')).push(
      new FormControl('', Validators.required)
    );
  }

  onDeleteProduct(index: number) {
    (<FormArray>this.orderForm.get('products')).removeAt(index);
  }

  onDeleteProducts() {
    (<FormArray>this.orderForm.get('products')).clear();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let orderId = '';
    let orderTxnDate = '';
    let orderBuyer = '';
    let orderStatus = '';
    let orderReceipt = '';
    let orderProducts = new FormArray([]);

    if(this.editMode) {
      const order = this.orderService.getOrder(this.id);
      orderId = order.id;
      orderTxnDate = order.txnDate;
      orderBuyer = order.buyer;
      orderStatus = order.status;
      orderReceipt = order.receipt;
      if(order['products']) {
        for(let product of order.products) {
            orderProducts.push(
            new FormControl(product, Validators.required)
          );
        }
      }
    }

    this.orderForm = new FormGroup({
      'id': new FormControl(orderId, Validators.required),
      'txnDate': new FormControl(orderTxnDate, Validators.required),
      'buyer': new FormControl(orderBuyer, Validators.required),
      'status': new FormControl(orderStatus, Validators.required),
      'receipt': new FormControl(orderReceipt, Validators.required),
      'products': orderProducts
    });
  }

  get controls() {
    return (<FormArray>this.orderForm.get('products')).controls;
  }

}
