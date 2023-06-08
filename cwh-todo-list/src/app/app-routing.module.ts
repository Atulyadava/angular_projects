import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mycomponent/about/about.component';
import { TodoComponent } from './mycomponent/todo/todo.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'todo',
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
