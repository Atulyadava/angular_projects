import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent {

  product:any=[];
  constructor(private serve:MyserviceService){}
  ngOnInit(){
    this.serve.getAllProducts().subscribe(res=>
      {
      this.product=res;
    });
  }

  onDetete(id:number){
this.serve.deleteProductById(id).subscribe(res=>console.log(res));
  }
}
