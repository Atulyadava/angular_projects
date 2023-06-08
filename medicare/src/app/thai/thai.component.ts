import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-thai',
  templateUrl: './thai.component.html',
  styleUrls: ['./thai.component.css']
})
export class ThaiComponent implements OnInit{

  ThaiIndinItem:any;

  constructor(private serv:MyserviceService){}
  ngOnInit(): void {
    this.serv.getProducts().subscribe(res=>{
      this.ThaiIndinItem=res;
    })
  }
}
