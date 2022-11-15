import { Component, OnInit } from '@angular/core';
import ITodo from './models/ITodo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My TODO app';

  totalTasks: number = 0;

  todoItem?: ITodo;
  tasks: ITodo[] = [
    {
      id: uuidv4(),
      title:
        'The classic latin passage that just never gets old, enjoy as much (or as little) lorem ipsum as you can handle with our easy to use filler text generator.',
    },
    {
      id: uuidv4(),
      title:
        "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
    },
  ];

  ngOnInit(): void {
    this.totalTasks = this.tasks.length;
  }

  totalTasksCount() {
    this.totalTasks = this.tasks.length;
  }

  onTaskAdded(toDo: ITodo) {
    this.tasks.push(toDo);
    this.totalTasksCount();
  }

  onTaskUpdated(toDo: ITodo) {
    console.log('toDo', toDo);
    var todoItem = this.tasks.find((x) => x.id == toDo.id);
    if (todoItem != null) todoItem.title = toDo.title;
  }

  onTaskEdit(todo: ITodo) {
    this.todoItem = todo;
    console.log(this.todoItem);
  }

  onTaskDelete(todo: ITodo) {
    console.log('onTaskDelete');
    var index = this.tasks.findIndex((x) => x.id == todo.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }

    this.totalTasksCount();
  }
  onClear() {
    console.log('asd');
    this.todoItem = undefined;
  }
}
