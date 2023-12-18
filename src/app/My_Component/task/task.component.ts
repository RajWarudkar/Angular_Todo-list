import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  
})

export class TaskComponent implements OnInit {

 



  @Input()
  todo = new Todo();
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoedit: EventEmitter<Todo> = new EventEmitter;
  constructor( private router: Router,private matDialog:MatDialog ,private dialog: MatDialog,private todolist: TodoListComponent) { }
  
  ngOnInit(): void {
  }
 

  onClickDeleteAchivment(todo:Todo){
    this.tododelete.emit(todo);
    console.log("Delete has been trigged --- 1",todo)
    console.log(todo)
  }

  onClickEdit(todo:Todo){
    this.todoedit.emit(todo);
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
  openDialogWithTemplateRef1(templateRef1: TemplateRef<any>) {
    this.dialog.open(templateRef1);
  }
  openDialogWithoutRef1() {
    this.dialog.open(this.secondDialog1);
  }

  updateTask(): void {
    if (this.todo) {
      this.todolist.edittodo(this.todo);
    }
  }
  
  
}