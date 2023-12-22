import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonalTodo } from 'src/app/PersonalTodo';
@Component({
  selector: 'app-add-personal-task',
  templateUrl: './add-personal-task.component.html',
  styleUrls: ['./add-personal-task.component.css']
})
export class AddPersonalTaskComponent implements OnInit {

  @Output() todoaddpersonal: EventEmitter<PersonalTodo> = new EventEmitter<PersonalTodo>();

  name2: string = '';
  desc2: string = '';
  srno2: number = 0;
  starttime2:number=0;
  endtime2 :number=0;

  constructor(private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todopersonal: PersonalTodo = {
      srno2: this.srno2,
      name2: this.name2,
      desc2: this.desc2,
      starttime2:this.starttime2,
      endtime2:this.endtime2
    };
    this.todoaddpersonal.emit(todopersonal);
  }

  @ViewChild('secondDialog', { static: true })
  secondDialog!: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

}
