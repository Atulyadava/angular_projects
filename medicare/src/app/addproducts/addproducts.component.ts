import { Component } from '@angular/core';
import { Product } from '../model/user';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {

  product:Product=new Product();
 constructor(private serv:MyserviceService){}
  onSubmit(){
  console.log(this.product)
  this.serv.addNewproduct(this.product).subscribe(res=>console.log(res));
  alert("data submited succesfully");
  }
}
