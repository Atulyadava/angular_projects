import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { MyserviceService } from 'src/app/service/myservice.service';


@Component({
  selector: 'app-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrls: ['./homeproducts.component.css']
})
export class HomeproductsComponent implements OnInit{
  public totalItem:number=0;
  productList:any;
  searchItems:string='';
  southIndia:any;
  ProductsByName:any;
  chineseProd:any;
  thaiProd:any;
  constructor(private serv:MyserviceService,private cartserv:CartserviceService, private router:Router){}
  ngOnInit(): void {
    this.serv.getProducts().subscribe(data=>{
      this.productList=data;

      this.productList.forEach((a:any) => {
        Object.assign(a,{total:a.price});

        this.cartserv.getProducts().subscribe(res=>{
          this.totalItem=res.length;
        })
      });
    })
  }
  
  searchProd(pname:any){
   this.serv.getProducts().subscribe(res=>{
    this.ProductsByName=res;
  
   })
  }

  addTocart(item : any){
    this.cartserv.addToCart(item)
  }

  southIndian(){
    this.router.navigate(['/','southindian'])
  }

  chinese(){
    this.router.navigate(['/','chainese'])
  }
  
thai(){
  this.router.navigate(['/','thai'])
  }



  goToCart(){
 this.router.navigate(['/','cart']);
  }
}
