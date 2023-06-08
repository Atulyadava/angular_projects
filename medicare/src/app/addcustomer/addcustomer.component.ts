import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { User } from '../model/user';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  user:User=new User();
 constructor(private serv:MyserviceService){}
  onSubmit(){
  console.log(this.user)
  this.serv.addNewCustomer(this.user).subscribe(res=>console.log(res));
  alert("data submited succesfully");
  }
}
