import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/produtos/product.service';
import { Product } from 'src/app/Models/product.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newProduct.component.html',
})

export class NewProductComponent implements OnInit {
  public form = {
    name:null,
    preco:null
  };
  product: Product;
  //productForm: FormGroup;

  constructor(private http:HttpClient,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder

    ) {
      //this.productForm = new FormGroup({
       // name: new FormControl(''),
       // preco: new FormControl(''),
   // });
     //productService.listproducts()
    }

    ngOnInit() {

      console.log('funcionando')

    }

    createProduct() {
      //const productcreate: Product = {
        //name: this.productForm.value['name'],
        //preco: this.productForm.value['preco']

      //}

     // console.log(productcreate);
     // console.log(this.productForm)
     //console.log(this.form)
      this.productService.newproduct(this.form).then(response=>{
        console.log('ok', response);
      })

    }
        //this.router.navigate(['/users']);




}
