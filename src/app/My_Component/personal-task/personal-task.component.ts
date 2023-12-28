import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalTodo } from 'src/app/PersonalTodo';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-personal-task',
  templateUrl: './personal-task.component.html',
  styleUrls: ['./personal-task.component.css']
})
export class PersonalTaskComponent implements OnInit {

  @Input()
  todoPersonal = new PersonalTodo();
  @Output() tododeletepersonal: EventEmitter<PersonalTodo> = new EventEmitter;
  @Output() todoeditpersonal: EventEmitter<PersonalTodo> = new EventEmitter;
  @Output() todoCheckedBoxPersonal: EventEmitter<PersonalTodo> = new EventEmitter;

  constructor( private router: Router,private matDialog:MatDialog ,private dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
 

  onClickDeletePersonal(todopersonal:PersonalTodo){
    this.tododeletepersonal.emit(todopersonal);
    console.log("Delete has been trigged --- 1",todopersonal)
    console.log(todopersonal)
  }

  onClickEditPersonal(todopersonal:PersonalTodo){
    this.todoeditpersonal.emit(todopersonal);
    console.log("Edit has been trigged 1")
  }
  
  @ViewChild('secondDialog', { static: true })
  secondDialog!: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

  @ViewChild('secondDialog1', { static: true })
  secondDialog1!: TemplateRef<any>;
  openDialogWithTemplateRef1(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef1() {
    this.dialog.open(this.secondDialog1);
  }
  
  onClickCheckedPersonal(todopersonal:PersonalTodo){
    this.todoCheckedBoxPersonal.emit(todopersonal)
  }


}
