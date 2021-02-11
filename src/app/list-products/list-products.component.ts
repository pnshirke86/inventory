import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  url = "https://6023f66b6bf3e6001766bb87.mockapi.io/inventory/api/get-products"
  products;

  constructor(public api : ProductService, private route : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
   this.getList()
  }

  getList(){
    this.api.getList(this.url).subscribe(res =>{
      console.log(res)
      this.products = res
    })
  }

  deleteProduct(id){  
    this.api.deleteData(id).subscribe(res=>{
      console.log(res);
      this.getList()
      this.showSuccess()
    })
  }

  showSuccess() {
    this.toastr.success('Product Deleted Successfully !');
  }

  viewData(value){
      this.route.navigate([`/view/${value}`])
  }

}
