import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(public taskService:TaskService) {}

  ngOnInit(): void {}

}
