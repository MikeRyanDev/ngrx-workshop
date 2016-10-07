import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TodoModel } from '../todo-model';


@Component({
  selector: 'todo-list',
  template: `
    <todo *ngFor="let todo of todos" [todo]="todo" (toggle)="onToggle($event)"></todo>
  `,
  styles: [`
    todo {
      display: block;
      padding: 6px;
    }
  `]
})
export class TodoListComponent {
  @Input() todos: TodoModel[];
  @Output() toggle = new EventEmitter<TodoModel>();

  onToggle($event: TodoModel) {
    this.toggle.emit($event);
  }
}