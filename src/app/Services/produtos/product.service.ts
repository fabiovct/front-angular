import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/Models/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list : Product[];


  private baseUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) {
    console.log('ok')
    console.log(HttpParams)



  }

 securityHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.token
    });
  }


  listproducts() {

    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token).append('Content-Type', 'multipart/form-data' )
    return this.http.get(`${this.baseUrl}/product/list-products`, {headers: head})
    .toPromise().then(res => this.list = res as Product[]);
  }

  /*listproducts(): Observable<Product> {
    this.securityHeaders()
    return this.http.get<Product>(`${this.baseUrl}/product/list-products`);
  }*/

}
