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
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  taskTitle = '';
  isEditing = false;
  @Output() onAddTask = new EventEmitter<ITodo>();
  @Output() onUpdateTask = new EventEmitter<ITodo>();
  @Output() onClearForm = new EventEmitter<void>();
  @Input() taskSelected?: ITodo;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes['taskSelected'].currentValue != undefined) {
      this.taskTitle = changes['taskSelected'].currentValue.title;
      this.taskSelected = changes['taskSelected'].currentValue;
    }
    this.isEditing = this.taskTitle !== '' ? true : false;
  }

  ngOnInit(): void {}

  onAddUpdateTask() {
    if (!this.taskTitle) return;
    if (!this.isEditing) {
      this.onAddTask.emit({ id: uuidv4(), title: this.taskTitle });
    } else {
      if (this.taskSelected != undefined) {
        console.log('Edited', this.taskSelected.id);
        this.onUpdateTask.emit({
          id: this.taskSelected.id,
          title: this.taskTitle,
        });
      }
    }

    this.onClear();
  }

  onClear() {
    this.onClearForm.emit();
    this.taskTitle = '';
    // this.taskSelected = undefined;
    this.isEditing = false;
  }
}
