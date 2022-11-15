import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import ITodo from 'src/app/models/ITodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() task: ITodo | undefined;
  @Output() taskEdit = new EventEmitter<ITodo>();
  @Output() taskDelete = new EventEmitter<ITodo>();
  constructor() {}
  ngOnInit(): void {}

  onEditTask() {
    console.log('onEditTask', this.task);
    this.taskEdit.emit(this.task);
  }

  onDeleteTask() {
    console.log('onDeleteTask', this.task);
    this.taskDelete.emit(this.task);
  }
}
