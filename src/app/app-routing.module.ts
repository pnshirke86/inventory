import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    component : ListProductsComponent,
    path : "list"
  },
  {
    component : ViewProductComponent,
    path : "view/:id"
  },
  {
    component : AddProductsComponent,
    path : "add"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
