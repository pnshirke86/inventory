import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  name 
  description 
  price 

  constructor(public route : Router, public activatedRoute : ActivatedRoute, private api : ProductService) { }

  ngOnInit(): void {
   let id  = this.activatedRoute.snapshot.params.id
     console.log(id)
     this.getData(id)
    
  }

  getData(value){
    this.api.getSingle(value).subscribe(res=>{
      console.log(res);
      this.name = res['product_name']
      this.description = res['description']
      this.price = res['price']
    })
  }

  back(){
   window.history.back()
  }

}
