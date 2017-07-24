import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todoList: Todo[] = [];
  constructor() { }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  removeTodo(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

}
