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

  name3: string = '';
  desc3: string = '';
  srno3: number = 0;

  constructor(private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todooffice: OfficeTodo = {
      srno3: this.srno3,
      name3: this.name3,
      desc3: this.desc3
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
