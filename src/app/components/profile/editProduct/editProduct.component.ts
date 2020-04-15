import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/produtos/product.service';
import { Product } from 'src/app/Models/product.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-newproduct',
  templateUrl: './editProduct.component.html',
})

export class EditProductComponent implements OnInit {
  public form = {
    name:null,
    preco:null
  };
  product: Product;
  productId = this.route.snapshot.params['id']
  //productForm: FormGroup;

  constructor(private http:HttpClient,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,

    ) {
    }


    ngOnInit() {
      console.log(this.productId)
      this.productService.productbyid(this.productId).then(
        product => {
          this.product = product;
          console.log(product)
          this.form.name = product[0]['name']
          this.form.preco = product[0]['preco']
        })


      console.log('funcionando')

    }

    updateProduct() {
      //this.productService.newproduct(this.form).then(response=>{
        //console.log('ok', response);
      //})
      this.productService.updateproduct(this.productId, this.form);
      console.log(this.form)
      this.router.navigate(['/profile']);

    }
        //this.router.navigate(['/users']);




}
