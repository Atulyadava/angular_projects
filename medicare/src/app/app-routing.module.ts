import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ChaineseComponent } from './chainese/chainese.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangepassComponent } from './components/changepass/changepass.component';
import { HomeComponent } from './components/home/home.component';
import { HomeproductsComponent } from './components/homeproducts/homeproducts.component';
import { LoginComponent } from './components/login/login.component';

import { ProductsComponent } from './components/products/products.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { ThaiComponent } from './thai/thai.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'cart',
   component:CartComponent
  },
  {
    path:'changepass',
    component:ChangepassComponent

  },
  {
    path:"myorder/:id",
    component:MyorderComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'homeproducts',
    component:HomeproductsComponent
  },
  {
    path:'updatecustomer',
    component:UpdatecustomerComponent
  },
  {
    path:"products/:id",
    component:ProductsComponent
  },
  {
    path:"addcustomer",
    component:AddcustomerComponent
  },
  {
    path:'addproducts',
    component:AddproductsComponent
  },
  {
    path:'showproducts',
    component:ShowproductsComponent
  },
  {
  path:'thai',
  component:ThaiComponent
  },
  {
    path:'southindian',
    component:SouthindianComponent
  },
  {
    path:'chainese',
    component:ChaineseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
