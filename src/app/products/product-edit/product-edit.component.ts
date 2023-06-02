import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

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
    const newProduct = new Product(this.productForm.value['name'], 
    this.productForm.value['price'], this.productForm.value['imagePath'],
    this.productForm.value['description'], this.productForm.value['categories']);
    */
    if(this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.onCancel();
  }

  onAddCategory() {
    (<FormArray>this.productForm.get('categories')).push(
      new FormControl('', Validators.required)
    );
  }

  onDeleteCategory(index: number) {
    (<FormArray>this.productForm.get('categories')).removeAt(index);
  }

  onDeleteCategories() {
    (<FormArray>this.productForm.get('categories')).clear();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let productName = '';
    let productPrice = 0;
    let productImagePath = '';
    let productDescription = '';
    let productCategories = new FormArray([]);

    if(this.editMode) {
      const product = this.productService.getProduct(this.id);
      productName = product.name;
      productPrice = product.price;
      productImagePath = product.imagePath;
      productDescription = product.description;
      if(product['categories']) {
        for(let category of product.categories) {
          productCategories.push(
            new FormControl(category, Validators.required)
          );
        }
      }
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'price': new FormControl(productPrice, Validators.required),
      'imagePath': new FormControl(productImagePath, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'categories': productCategories
    });
  }

  get controls() {
    return (<FormArray>this.productForm.get('categories')).controls;
  }

}
