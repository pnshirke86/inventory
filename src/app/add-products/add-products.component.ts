import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  url = "https://602b9536ef26b40017f146e9.mockapi.io/inventory/api/get-products"
  form : FormGroup
  id;

  constructor(private fb : FormBuilder, private api : ProductService,
    public route : Router,private toastr: ToastrService,
    public activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name : ['',Validators.required],
      description: [''],
      price : [,Validators.required]
    })
    this.id
    this.id= this.activeRoute.snapshot.params.id
    if(this.id){
     this.getData(this.id)
      
   }
  
   
  }

  getData(value){
    this.api.getSingle(value).subscribe(res=>{
      console.log(res);
      this.form.patchValue({
        name : res['name'],
        description : res['description'],
        price : res['price']
      })
    },err =>{
      console.log(err); 
    })  
  }




  onSubmit(value){

    console.log(value)
    if(this.id){
      let url = this.url+"/"+this.id
      this.api.putData(url, value).subscribe(res=>{
        this.form.reset()
        this.showSuccess()
        this.route.navigate(["/list"])
      })
    }else{
      this.api.postData(this.url, value).subscribe(res=>{
        this.form.reset()
        this.showSuccess()
        this.route.navigate(["/list"])
      })
    }
    
  }

  showSuccess() {
    this.toastr.success('Product Added Successfully !');
  }


}
