import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];
  editable: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.editable = false;
  }

  checkTodo(todo: Todo) {
    todo.toggle();
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
