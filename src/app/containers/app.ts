import { Component } from '@angular/core';


@Component({
  selector: 'workshop-app',
  template: `
    <h1>@ngrx Workshop</h1>
  `,
  styles: [`
    :host {
      display: block;
      padding-bottom: 20px;
    }
  `]
})
export class AppComponent { }