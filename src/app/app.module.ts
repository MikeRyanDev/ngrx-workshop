import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './containers/app';
import { AddTodoComponent } from './components/add-todo';
import { TodoComponent } from './components/todo';
import { TodoListComponent } from './components/todo-list';
import { TodoFilterComponent } from './components/todo-filter';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    TodoListComponent,
    TodoFilterComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }