import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  public cartItems:any=[]
  public productList=new BehaviorSubject<any>([])
  constructor() { }
  getProducts(){
    return this.productList.asObservable()
  }

  setProducts(product:any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }
  addToCart(product:any){
   this.cartItems.push(product);
   this.productList.next(this.cartItems);
   this.getTotalPrice();
   console.log(this.cartItems)
  }
  getTotalPrice() :number{
    let grandTotal=0;
    this.cartItems.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItems.map((a:any,index:any)=>{
  if(product.id===a.id){
    this.cartItems.splice(index,1)
  }
    })
    this.productList.next(this.cartItems)
  }

  removeAllCart(){
    this.cartItems=[]
    this.productList.next(this.cartItems);
    
  }
}
