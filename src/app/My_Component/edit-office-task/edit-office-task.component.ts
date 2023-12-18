import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OfficeTodo } from 'src/app/OfficeTodo';
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
  @Output() todoeditoffice: EventEmitter<OfficeTodo> = new EventEmitter<OfficeTodo>();

  name3: string = '';
  desc3: string = '';
  srno3: number = 0;
  model : any = {};

  onSubmit() {
    const todooffice: OfficeTodo = {
      srno3: this.srno3,
      name3: this.name3,
      desc3: this.desc3
    };
    this.model = todooffice
    this.todoeditoffice.emit(todooffice);
    console.log(todooffice)
    
  }

}
