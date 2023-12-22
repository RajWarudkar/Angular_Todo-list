import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OfficeTodo } from 'src/app/OfficeTodo';

@Component({
  selector: 'app-add-office-task',
  templateUrl: './add-office-task.component.html',
  styleUrls: ['./add-office-task.component.css']
})
export class AddOfficeTaskComponent implements OnInit {

  @Output() todoaddoffice: EventEmitter<OfficeTodo> = new EventEmitter<OfficeTodo>();

  name1: string = '';
  desc1: string = '';
  srno1: number = 0;
  starttime1: number = 0;
  endtime1: number = 0

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todooffice: OfficeTodo = {
      srno1: this.srno1,
      name1: this.name1,
      desc1: this.desc1,
      starttime1: this.starttime1,
      endtime1: this.endtime1
    };
    this.todoaddoffice.emit(todooffice);
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
