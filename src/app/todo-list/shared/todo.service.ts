import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    todo: new FormControl('',Validators.required)
  });
}
