import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent {

  orderItem:any;
  constructor(private serv:MyserviceService,private route:ActivatedRoute ,private router:Router){}
  
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    this.serv.getProductById(Number(id)).subscribe(x=>this.orderItem=x);
  }

  payment(){
   this.router.navigate(['/','payment'])
  }
}
