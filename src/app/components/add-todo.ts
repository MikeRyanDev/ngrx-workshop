import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'add-todo',
  template: `
    <md-input [(ngModel)]="todo"></md-input>

    <button md-button (click)="onAdd()">Add Todo</button>
  `
})
export class AddTodoComponent {
  @Output() add = new EventEmitter();
  todo = '';

  onAdd() {
    this.add.emit(this.todo);
    this.todo = '';
  }
}