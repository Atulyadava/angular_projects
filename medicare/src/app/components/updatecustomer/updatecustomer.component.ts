import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit{
 
  user:any=[];
  constructor(private serve:MyserviceService,private router:Router){}
  ngOnInit(){
    this.serve.getCustomer().subscribe(res=>
      {
      this.user=res;
    });
  }

  onDetete(id:number){
    this.serve.deleteById(id).subscribe(res=>console.log(res));
  }

  AddCustomer(){
     this.router.navigate(['/','addcustomer'])
  }

  Addproducts(){
    this.router.navigate(['/','addproducts'])
  }

  showproducts(){
    this.router.navigate(['/','showproducts'])
  }
}
