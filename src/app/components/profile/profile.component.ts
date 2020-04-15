import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/Services/token.service';
import { ProductService } from 'src/app/Services/produtos/product.service';
import { Product } from 'src/app/Models/product.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  products: Product[];
  //private baseUrl = 'http://localhost:8000/api'
  constructor(private http:HttpClient,
    private router: Router,
    private productService: ProductService,

    ) {
     //productService.listproducts()
    }
    //$token: Observable<TokenService>
    //$product: Observable<ProductService[]>

  ngOnInit() {

    this.productService.listproducts()
      .then(products => {
        this.products = products;
      }).catch(
        products => this.router.navigateByUrl('/login')
    );

  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  remove(id) {
    this.productService.removeproduct(id)
    this.productService.listproducts()
      .then(products => {
        this.products = products;
      }).catch(
        products => this.router.navigateByUrl('/login')
    );
  }



}
