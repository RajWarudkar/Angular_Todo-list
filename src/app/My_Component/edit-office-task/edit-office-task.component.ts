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
  starttime: number =0;
  endtime :number =0;
  active :boolean =false
  onSubmit() {
    const todo: Todo = {
      srno: this.srno,
      name: this.name,
      desc: this.desc,
      starttime :this.starttime,
      endtime :this.endtime,
      active :this.active
    };
    this.todoedit.emit(todo);
  }

}
