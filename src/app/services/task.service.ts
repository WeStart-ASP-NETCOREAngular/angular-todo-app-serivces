import ITodo from '../models/ITodo';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from '@angular/core';

export class TaskService {
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

  taskSeleced = new EventEmitter<ITodo>();

  addTask(toDo: ITodo) {
    this.tasks.push(toDo);
  }
  updateTask(toDo: ITodo) {
    var todoItem = this.tasks.find((x) => x.id == toDo.id);
    if (todoItem != null) todoItem.title = toDo.title;
  }
  deleteTask(todo: ITodo) {
    console.log('onTaskDelete');
    var index = this.tasks.findIndex((x) => x.id == todo.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
