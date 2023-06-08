import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-chainese',
  templateUrl: './chainese.component.html',
  styleUrls: ['./chainese.component.css']
})
export class ChaineseComponent implements OnInit {

  chineseIndinItem:any;

  constructor(private serv:MyserviceService){}
  ngOnInit(): void {
    this.serv.getProducts().subscribe(res=>{
      this.chineseIndinItem=res;
    })
  }
}
