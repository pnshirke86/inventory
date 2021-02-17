import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://602b9536ef26b40017f146e9.mockapi.io/inventory/api/get-products"

  constructor(public http : HttpClient) { }

  getList(url){
    return this.http.get(url)
  }
  postData(url ,data){
    return this.http.post(url ,data)
  }
  putData(url ,data){
    return this.http.put(url ,data)
  }

  deleteData(item){
    return this.http.delete(`${this.url}/${item}`)
  }
  getSingle(item){
    return this.http.get(`${this.url}/${item}`)
  }
}
