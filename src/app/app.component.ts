import { Component, OnInit } from '@angular/core';
import ITodo from './models/ITodo';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'My TODO app';

  todoItem?: ITodo;

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
  }
  

}
