import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

    private apiurl = "http://localhost:8080/api/product-category";

  constructor(private httpclient : HttpClient) { }

  getProductCategories(): Observable<ProductCategory[]>{

    return this.httpclient.get<getResponseProductCategory>(this.apiurl)
    .pipe(map( response => response._embedded.productCategory));
  }

}
  interface getResponseProductCategory{

    _embedded: {
      productCategory :ProductCategory[];
    }
  } 



