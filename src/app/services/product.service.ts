import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://6023f66b6bf3e6001766bb87.mockapi.io/inventory/api/get-products"

  constructor(public http : HttpClient) { }

  getList(url){
    return this.http.get(url)
  }
  postData(url ,data){
    return this.http.post(url ,data)
  }

  deleteData(item){
    return this.http.delete(`${this.url}/${item}`)
  }
  getSingle(item){
    return this.http.get(`${this.url}/${item}`)
  }
}
