import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../shared/todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { todoAppStore } from '../../store';
import { REMOVE_ALL_TODOS } from '../../action';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../action';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoEditComponent } from 'src/app/todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  model = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };
  edit: boolean;
  edittId: any;
  constructor(private service: TodoService, private ngRedux: NgRedux<todoAppStore>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  formSubmit() {
    this.model = {
      id: 0,
      description: this.service.form.value.todo,
      responsible: "",
      priority: "low",
      isCompleted: false
    };
    this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
    this.service.form.reset();

  }

  openDialog(id,description): void {
    const dialogRef = this.dialog.open(TodoEditComponent, {
      width: '250px',
      data: { id:id,name: description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.description = result;
    });
  }


  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}

