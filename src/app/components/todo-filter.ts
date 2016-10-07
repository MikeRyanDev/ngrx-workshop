import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'todo-filter',
  template: `
    <md-radio-group [value]="filter" (change)="onChange($event.source.value)">
      <md-radio-button value="All">All</md-radio-button>
      <md-radio-button value="Incomplete">Incomplete</md-radio-button>
      <md-radio-button value="Complete">Complete</md-radio-button>
    </md-radio-group>
  `,
  styles: [`
    :host {
      display: block;
      padding: 10px 0;
    }
  `]
})
export class TodoFilterComponent {
  @Input() filter: string;
  @Output() change = new EventEmitter<string>();

  onChange(filter: string) {
    this.change.emit(filter);
  }
}