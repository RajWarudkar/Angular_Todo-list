import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-edit-personal-task',
  templateUrl: './edit-personal-task.component.html',
  styleUrls: ['./edit-personal-task.component.css']
})
export class EditPersonalTaskComponent implements OnInit {

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
