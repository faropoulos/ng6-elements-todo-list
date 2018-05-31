import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements'

import {
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  entryComponents: [
    TodoListComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector){ }
  ngDoBootstrap(){
    const el = createCustomElement(TodoListComponent, { injector: this.injector });
    customElements.define('todo-list', el);
  }
}
