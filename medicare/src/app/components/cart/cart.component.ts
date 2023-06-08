import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  grandTotal:number=0;
  constructor(public cartserv:CartserviceService){}
  ngOnInit(): void {
    this.cartserv.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartserv.getTotalPrice();
    })
  }

  removeItem(item:any){
 this.cartserv.removeCartItem(item);
  }

  emptyCart(){
    this.cartserv.removeAllCart();
  }
}
