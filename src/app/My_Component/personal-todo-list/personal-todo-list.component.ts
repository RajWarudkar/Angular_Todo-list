import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalTodo } from 'src/app/PersonalTodo';
import { SidebarService } from 'src/app/sidebar.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-personal-todo-list',
  templateUrl: './personal-todo-list.component.html',
  styleUrls: ['./personal-todo-list.component.css']
})
export class PersonalTodoListComponent implements OnInit {
  
  localItemPersonal: string | null = null;
  todosPersonal!: PersonalTodo[];
 
  constructor(private router: Router, private sidebarService: SidebarService) {
    this.localItemPersonal = localStorage.getItem("todospersonal")
    if (this.localItemPersonal == null) {
      this.todosPersonal = [];
    }else{
      this.todosPersonal=JSON.parse(this.localItemPersonal)
    }
  }

  ngOnInit(): void {
  }

  deleteTodoPersonal(todopersonal: PersonalTodo) {
    console.log(todopersonal)
    const index = this.todosPersonal.indexOf(todopersonal);
    this.todosPersonal.splice(index, 1);
    localStorage.setItem("todospersonal", JSON.stringify(this.todosPersonal));
  }
  addtodoPersonal(todopersonal: PersonalTodo) {
    console.log(todopersonal)
    this.todosPersonal.push(todopersonal);
    localStorage.setItem("todospersonal", JSON.stringify(this.todosPersonal));
  }


  
}
