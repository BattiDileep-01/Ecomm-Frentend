import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:8080/api/product";

  constructor(private httpclient: HttpClient) { }

  getProductByCategory(theCategoryId: number): Observable<Product[]> {
    const searchurl = `${this.apiUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpclient.get<getResponse>(searchurl)
      .pipe(map(response => response._embedded.products));
  }

  getProduct(theProdcutId: number): Observable<Product>{
    const producturl = `${this.apiUrl}/${theProdcutId}`;
    return this.httpclient.get<Product>(producturl);

  }

  searchProduct(theKeyWord: String): Observable<Product[]> {
    const searchurl = `${this.apiUrl}/search/findByNameContaining?name=${theKeyWord}`;
    return this.httpclient.get<getResponse>(searchurl)
      .pipe(map(response => response._embedded.products));
  }

  getProducts(): Observable<Product[]> {
    return this.httpclient.get<getResponse>(this.apiUrl)
      .pipe(map(response => response._embedded.products));

  }
}

interface getResponse {

  _embedded: {
    products: Product[];
  }
}
