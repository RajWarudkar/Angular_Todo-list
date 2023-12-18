import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.css']
})
export class EditTodoListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
