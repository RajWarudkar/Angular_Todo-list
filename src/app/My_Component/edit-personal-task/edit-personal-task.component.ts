import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonalTodo } from 'src/app/PersonalTodo';
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
  @Output() todoedit: EventEmitter<PersonalTodo> = new EventEmitter<PersonalTodo>();

  name: string = '';
  desc: string = '';
  srno: number = 0;
  starttime :number=0;
  endtime :number=0;

  onSubmit() {
    const todo: PersonalTodo = {
      srno2: this.srno,
      name2: this.name,
      desc2: this.desc,
      starttime2 :this.starttime,
      endtime2 :this.endtime
    };
    this.todoedit.emit(todo);
  }

}
