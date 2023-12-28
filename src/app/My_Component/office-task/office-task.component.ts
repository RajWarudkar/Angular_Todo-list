import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { OfficeTodo } from 'src/app/OfficeTodo';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-office-task',
  templateUrl: './office-task.component.html',
  styleUrls: ['./office-task.component.css']
})
export class OfficeTaskComponent implements OnInit {


  ngOnInit(): void {
  }
  @Input()
  todooffice = new OfficeTodo();
  

  @Output() tododeleteoffice: EventEmitter<OfficeTodo> = new EventEmitter;
  @Output() todoeditoffice: EventEmitter<OfficeTodo> = new EventEmitter;
  @Output() todoCheckedBoxOffice: EventEmitter<OfficeTodo> = new EventEmitter;

  constructor( private router: Router,private matDialog:MatDialog ,private dialog: MatDialog) { }
  

 

  onClickDeleteoffice(todooffice:OfficeTodo){
    this.tododeleteoffice.emit(todooffice);
   
    console.log("Delete has been trigged -- 2",todooffice)
  }

  onClickEditoffice(todooffice:OfficeTodo){
    this.todoeditoffice.emit(todooffice);
    console.log("Edit has been trigged 2")
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


  onClickCheckedOffice(todooffice:OfficeTodo){
    this.todoCheckedBoxOffice.emit(todooffice)
  }
}
