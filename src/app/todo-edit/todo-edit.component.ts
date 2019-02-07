import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo-list/shared/todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { todoAppStore } from '../store';
import { TOGGLE_TODO } from '../action';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  model: { id: any; description: any; responsible: string; priority: string; isCompleted: boolean; };

  constructor(
    public dialogRef: MatDialogRef<TodoEditComponent>, private service: TodoService, private ngRedux: NgRedux<todoAppStore>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  formSubmit() {
    console.log(this.data['id'])
    console.log(this.service.form.value.todo);
    this.model = {
      id: this.data['id'],
      description: this.service.form.value.todo,
      responsible: "",
      priority: "low",
      isCompleted: false
    };
    this.ngRedux.dispatch({ type: TOGGLE_TODO, todo: this.model });
    this.onNoClick();
  }
}
