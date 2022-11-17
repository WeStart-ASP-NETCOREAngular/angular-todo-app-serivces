import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownButtonDirective } from './dropdown-button.directive';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './services/logger.service';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownButtonDirective,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TaskService,LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
