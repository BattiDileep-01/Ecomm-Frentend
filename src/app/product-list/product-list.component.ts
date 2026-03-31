import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean | undefined;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.listProduct();
    })
  }

  listProduct(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
    }else{
      this.handleListProduct();
    }
  }

    handleSearchProducts() {
    const theKeyword: String = this.route.snapshot.paramMap.get('keyword')!;
    this.productservice.searchProduct(theKeyword).subscribe(data => {
      this.products = data;
    })
  }

  handleListProduct() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }else {
      this.currentCategoryId = 1;
    }

    this.productservice.getProductByCategory(this.currentCategoryId).subscribe(data => { 
        this.products = data;
       })
  }
}
