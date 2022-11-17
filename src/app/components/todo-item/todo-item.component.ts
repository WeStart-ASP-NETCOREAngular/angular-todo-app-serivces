import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() task!: ITodo;
  constructor(private taskService:TaskService) {}
  ngOnInit(): void {
    console.log('TodoItemComponent : ngOnInit');
  }

  onEditTask() {
    this.taskService.taskSeleced.emit(this.task);
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.task);
  }
}
