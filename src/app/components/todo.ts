import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../todo-model';


@Component({
  selector: 'todo',
  template: `
    <md-checkbox [checked]="todo.complete" (change)="onChange()"></md-checkbox>
    <p>{{ todo.description }}</p>
  `,
  styles: [`
    md-checkbox {
      float: left;
    }
  `]
})
export class TodoComponent {
  @Input() todo: TodoModel;
  @Output() toggle = new EventEmitter<TodoModel>();

  onChange() {
    this.toggle.emit(this.todo);
  }
}