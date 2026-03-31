import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../common/product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink , RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  product!: Product;

  constructor(private productservice: ProductService ,
              private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( () => {
    this.handleProductDetails();
  })
  }
  handleProductDetails(){
   const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
   this.productservice.getProduct(theProductId).subscribe(data => {
    this.product = data;

   } )

  }

}
