import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Todo } from '../../Todo';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  
  
  @Output() todoadd: EventEmitter<Todo> = new EventEmitter<Todo>();

  name1: string = '';
  desc1: string = '';
  srno1: number = 0;

  constructor(private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: Todo = {
      srno1: this.srno1,
      name1: this.name1,
      desc1: this.desc1
    };
    this.todoadd.emit(todo);
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
