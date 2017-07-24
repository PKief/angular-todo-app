import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todoList: Todo[] = [new Todo('1', 'buy water'), new Todo('2', 'wash the car')];
  constructor() { }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  removeTodo(todo: Todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

}
