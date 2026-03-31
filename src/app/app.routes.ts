import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

    {path: 'search/:keyword', component: ProductListComponent},
    {path: 'products/:id', component: DetailsComponent},
    {path: 'category/:id', component: ProductListComponent},
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'},

];
