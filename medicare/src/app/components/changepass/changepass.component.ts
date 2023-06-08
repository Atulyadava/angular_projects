import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent {


  constructor(private routet:Router){}
  login(name:any,password:any){
    this.routet.navigate(['/','login'])
   alert("your password is changed");
  }
}
