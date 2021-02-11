import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  url = "https://6023f66b6bf3e6001766bb87.mockapi.io/inventory/api/get-products"
  form : FormGroup


  constructor(private fb : FormBuilder, private api : ProductService,
    public route : Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name : ['',Validators.required],
      description: [''],
      price : [,Validators.required]
    })
  }

  onSubmit(value){
    console.log(value)
    let data = JSON.stringify(value)
    this.api.postData(this.url, value).subscribe(res=>{
      this.form.reset()
      this.showSuccess()
      this.route.navigate(["/list"])
    

    })
  }

  showSuccess() {
    this.toastr.success('Product Added Successfully !');
  }


}
