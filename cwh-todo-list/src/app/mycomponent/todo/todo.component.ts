import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
 
  todos:Todo[];
  localItem: string | null;
  constructor(){
  this.localItem=localStorage.getItem("tod");
if(this.localItem==null){
  this.todos=[]
}else{
  this.todos=JSON.parse(this.localItem);
}
    
  }
  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const inde=this.todos.indexOf(todo);
    this.todos.splice(inde,1);
    localStorage.setItem("tod",JSON.stringify(this.todos))
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("tod",JSON.stringify(this.todos))
  }
  toggelTodos(todo:Todo){
    const inde=this.todos.indexOf(todo);
    this.todos[inde].active=!this.todos[inde].active
    localStorage.setItem("tod",JSON.stringify(this.todos))
  }
}
