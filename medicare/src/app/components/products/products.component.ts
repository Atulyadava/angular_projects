import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  user:any;
  constructor(private serv:MyserviceService,private route:ActivatedRoute){}
  
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    this.serv.getCustomerById(Number(id)).subscribe(res=>{
      this.user=res;
    })
  }
}
