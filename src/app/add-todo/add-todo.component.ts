import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  addTodo(descriptionInput: HTMLInputElement, event: Event) {
    event.preventDefault();
    const todo = new Todo(Date.now().toString(), descriptionInput.value);
    this.todoService.addTodo(todo);
    descriptionInput.value = '';
  }

  ngOnInit() {
  }

}
