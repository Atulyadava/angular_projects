import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-southindian',
  templateUrl: './southindian.component.html',
  styleUrls: ['./southindian.component.css']
})
export class SouthindianComponent implements OnInit{

 southIndinItem:any;

  constructor(private serv:MyserviceService){}
  ngOnInit(): void {
    this.serv.getProducts().subscribe(res=>{
      this.southIndinItem=res;
    })
  }

}
