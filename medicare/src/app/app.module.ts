import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChangepassComponent } from './components/changepass/changepass.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HomeproductsComponent } from './components/homeproducts/homeproducts.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { PaymentComponent } from './payment/payment.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { ChaineseComponent } from './chainese/chainese.component';
import { ThaiComponent } from './thai/thai.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangepassComponent,
    UpdatecustomerComponent,
    HomeComponent,
    AdminloginComponent,
    HomeproductsComponent,
    CartComponent,
    ProductsComponent,
    PaymentComponent,
    AddcustomerComponent,
    MyorderComponent,
    AddproductsComponent,
    ShowproductsComponent,
    SouthindianComponent,
    ChaineseComponent,
    ThaiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
