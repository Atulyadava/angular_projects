import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './mycomponent/todo/todo.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './mycomponent/add-todo/add-todo.component';
import { AboutComponent } from './mycomponent/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
