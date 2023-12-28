import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeTodo } from 'src/app/OfficeTodo';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-office-todo-list',
  templateUrl: './office-todo-list.component.html',
  styleUrls: ['./office-todo-list.component.css']
})
export class OfficeTodoListComponent implements OnInit {

  localItem: string | null = null;
  todosoffice!: OfficeTodo[];


 


  constructor(private router: Router, private sidebarService: SidebarService) {
    this.localItem = localStorage.getItem("todosoffice")
    if (this.localItem == null) {
      this.todosoffice = [];
    }else{
      this.todosoffice=JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todooffice: OfficeTodo) {
    console.log(todooffice)
    const index = this.todosoffice.indexOf(todooffice);
    this.todosoffice.splice(index, 1);
    localStorage.setItem("todosoffice", JSON.stringify(this.todosoffice));
  }
  addtodooffice(todoOffice: OfficeTodo) {
    console.log(todoOffice)
    this.todosoffice.push(todoOffice);
    localStorage.setItem("todosoffice", JSON.stringify(this.todosoffice));
  }

  toggaltodoOffice(todosOffice: OfficeTodo) {
    console.log(todosOffice)
    const index1 = this.todosoffice.indexOf(todosOffice);
    this.todosoffice[index1].active1 = !this.todosoffice[index1].active1;
    localStorage.setItem("todosoffice", JSON.stringify(this.todosoffice));
  }
  
}
