import { NgModule } from '@angular/core';

import { TodoService } from './todo.service';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
