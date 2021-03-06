import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/Models/product.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list : Product[];
  listProduct : Product;
  error: Boolean;


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
    .toPromise()
    .then(res => this.list = res as Product[])
    .catch(this.handleError);
  }

  productbyid(id) {
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token).append('Content-Type', 'multipart/form-data' )
    return this.http.get(`${this.baseUrl}/product/${id}`, {headers: head})
    .toPromise()
    .then(res => this.list = res as Product[])
    .catch(this.handleError);
  }



  newproduct(product) {

    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token)

    return this.http.post(`${this.baseUrl}/product/create`,product, {headers: head})
    .toPromise()
    .then(res => this.listProduct = res as Product)
    .catch(this.handleError);
  }

  updateproduct(id, product) {
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token)
    return this.http.post(`${this.baseUrl}/product/update/${id}`,product, {headers: head})
    .toPromise()
    .then(res => this.listProduct = res as Product)
    .catch(this.handleError);
  }

  removeproduct(id){
    const head = new HttpHeaders().append('Authorization', 'Bearer '+localStorage.token)
    return this.http.post(`${this.baseUrl}/product/delete/${id}`, id, {headers: head})
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  //localhost:8000/api/product/create

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  /*listproducts(): Observable<Product> {
    this.securityHeaders()
    return this.http.get<Product>(`${this.baseUrl}/product/list-products`);
  }*/

}
