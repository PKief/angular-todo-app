import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';
import { TodoService } from './todo.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MyMaterialModule
      ],
      declarations: [
        AppComponent,
        TodoListComponent,
        AddTodoComponent
      ],
      providers: [TodoService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
