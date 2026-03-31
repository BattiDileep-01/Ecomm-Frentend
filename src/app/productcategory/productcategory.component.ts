import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ProductCategory } from '../common/product-category';
import { ProductCategoryService } from '../services/product-category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productcategory',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink ,RouterModule],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent implements OnInit{

   productcategory: ProductCategory[] =[];

  constructor(private productcategoryservice: ProductCategoryService,
              private route : ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   this.listProductCategory();
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe( () => {
      this.listProductCategory();
    })
  }

  listProductCategory(){
    this.productcategoryservice.getProductCategories().subscribe(data => this.productcategory = data);
  }

}
