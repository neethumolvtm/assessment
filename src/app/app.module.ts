import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from './material/material.module';
import { TodoService } from './todo-list/shared/todo.service';
import { TodoComponent } from './todo-list/todo/todo.component';
import { TodoAllComponent } from './todo-list/todo-all/todo-all.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { todoAppStore, rootReducer, INITIAL_STATE } from './store'
import { TOGGLE_TODO, REMOVE_ALL_TODOS, REMOVE_TODO, ADD_TODO } from './action';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoAllComponent,
    TodoEditComponent,
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  entryComponents: [TodoEditComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<todoAppStore>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
