import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OfficeTodo } from 'src/app/OfficeTodo';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() todoeditoffice: EventEmitter<Todo> = new EventEmitter<Todo>();

  name1: string = '';
  desc1: string = '';
  srno1: number = 0;

  onSubmit() {
    const todo: Todo = {
      srno1: this.srno1,
      name1: this.name1,
      desc1: this.desc1
    };
    this.todoeditoffice.emit(todo);
  }
  onClickEditoffice(todooffice:OfficeTodo){
    console.log("Edit has been trigged 2",todooffice);
  }

}
