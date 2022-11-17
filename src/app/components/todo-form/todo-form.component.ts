import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import ITodo from 'src/app/models/ITodo';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  taskTitle = '';
  isEditing = false;
  taskSelected?: ITodo;

  constructor(private taskService: TaskService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    console.log('TodoFormComponent : ngOnInit');
    this.taskService.taskSeleced.subscribe((todo: ITodo) => {
      console.log('event emitted:', todo);
      this.taskSelected = todo;
      this.taskTitle = this.taskSelected.title;
      this.isEditing = true;
    });
  }

  onAddUpdateTask() {
    if (!this.taskTitle) return;
    if (!this.isEditing) {
      this.taskService.addTask({ id: uuidv4(), title: this.taskTitle });
    } else {
      if (this.taskSelected != undefined) {
        console.log('Edited', this.taskSelected.id);
        this.taskService.updateTask({
          id: this.taskSelected.id,
          title: this.taskTitle,
        });
      }
    }

    this.onClear();
  }

  onClear() {
    this.taskTitle = '';
    this.isEditing = false;
  }
}
