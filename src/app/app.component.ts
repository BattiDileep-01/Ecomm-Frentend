import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DefaultpipeComponent } from './defaultpipe/defaultpipe.component';
import { EmployeecountComponent } from "./employeecount/employeecount.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductcategoryComponent } from "./productcategory/productcategory.component";
import { SearchComponent } from './search/search.component';




@Component({
   selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, DefaultpipeComponent, EmployeecountComponent, ProductListComponent, RouterModule, ProductcategoryComponent,
            SearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'E-Comm';
}
