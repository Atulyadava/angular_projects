import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
return this.http.get("http://localhost:8081/getProducts")
  }

  
   getCustomer():Observable<any>   {
    return this.http.get("http://localhost:8081/getCustomer");
   }

   getCustomerById(id:number):Observable<any>{

    return this.http.get<any>("http://localhost:8081/getById/"+id);
   }
   
   deleteById(id:number):Observable<any>{
    return this.http.delete<any>("http://localhost:8081/delete/"+id);
   }

   addNewCustomer(obj:User){
    return this.http.post("http://localhost:8081/register",obj);
   }

   getProductById(id:number):Observable<any>{
    return this.http.get("http://localhost:8081/getProductsById/"+id)
   }

   addNewproduct(obj1:Product){
    return this.http.post("http://localhost:8081/registerProducts",obj1);
   }
   getAllProducts():Observable<any>{
    return this.http.get("http://localhost:8081/getProducts");
   }
   
   deleteProductById(id:number){
    return this.http.delete("http://localhost:8081/deleteProducts/"+id)
   }
}
