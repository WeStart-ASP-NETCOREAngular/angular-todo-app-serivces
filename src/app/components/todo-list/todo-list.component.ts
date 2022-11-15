import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import ITodo from 'src/app/models/ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: ITodo[] = [];
  @Output() taskEdit = new EventEmitter<ITodo>();
  @Output() taskDelete = new EventEmitter<ITodo>();
  constructor() {}

  ngOnInit(): void {}

  onSelectEdit(todo: ITodo) {
    this.taskEdit.emit(todo);
  }
  onSelectDelete(todo: ITodo) {
    this.taskDelete.emit(todo);
  }
}
