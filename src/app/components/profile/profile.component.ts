import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/Services/token.service';
import { ProductService } from 'src/app/Services/produtos/product.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //private baseUrl = 'http://localhost:8000/api'
  constructor(private http:HttpClient,
    private router: Router,
    private product: ProductService,


    ) { }
    $token: Observable<TokenService>
    $product: Observable<ProductService[]>

  ngOnInit() {
   //const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token)
    //this.product.listproducts()
    console.log(this.product.listproducts())
    //console.log(localStorage.token)


    //console.log(this.$product)
    //this.product.listproducts()
    //console.log(this.product.listproducts());




    //let token = JSON.parse(localStorage.token)
    //console.log(token['jti'])
    //console.log(decode(localStorage[0]))

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }



}
