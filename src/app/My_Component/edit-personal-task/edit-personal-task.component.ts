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
  @Output() todoeditpersonal: EventEmitter<PersonalTodo> = new EventEmitter<PersonalTodo>();

  name2: string = '';
  desc2: string = '';
  srno2: number = 0;

  onSubmit() {
    const Personaltodo: PersonalTodo = {
      srno2: this.srno2,
      name2: this.name2,
      desc2: this.desc2
    };
    this.todoeditpersonal.emit(Personaltodo);
  }

}
