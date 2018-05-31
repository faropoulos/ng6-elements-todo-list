import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newText: string = '';
  constructor() { }
  ngOnInit() {
    this.todos.push(new Todo('Homework'), new Todo('Go to Grocery Store', true));
  }
  addTodo(){
    this.todos.push(new Todo(this.newText));
    this.newText = '';
  }
  removeTodo(index: number){
    this.todos.splice(index, 1);
  }
  clearList(){
    this.todos = [];
  }
}
