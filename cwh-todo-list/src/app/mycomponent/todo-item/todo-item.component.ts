import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete :EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox :EventEmitter<Todo>=new EventEmitter();
  
  constructor(){
  }
  ngOnInit(): void { 
  }
  ontClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("hello boy");
  }
  onCheckBoxClick(todo:Todo){
   
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }
}
