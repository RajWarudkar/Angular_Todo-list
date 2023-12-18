import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-edit-office-task',
  templateUrl: './edit-office-task.component.html',
  styleUrls: ['./edit-office-task.component.css']
})
export class EditOfficeTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() todoedit: EventEmitter<Todo> = new EventEmitter<Todo>();

  name: string = '';
  desc: string = '';
  srno: number = 0;

  onSubmit() {
    const todo: Todo = {
      srno: this.srno,
      name: this.name,
      desc: this.desc
    };
    this.todoedit.emit(todo);
  }

}
