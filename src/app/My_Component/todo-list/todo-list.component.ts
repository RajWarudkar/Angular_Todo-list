import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Todo';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  localItem: string | null;
  todos!: Todo[];
  editingTodo: Todo | null = null;
 

  
  constructor(private router: Router, private sidebarService: SidebarService) {
    this.localItem = localStorage.getItem("todos")
    if (this.localItem == null) {
      this.todos = [];
    }else{
      this.todos=JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
    // this.todos = this.todoService.getTodos();
  }
  getTasks() {
    console.log(this.localItem);
    return this.localItem;
  }
  deleteTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addtodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.push(todo,);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  edittodo(editedtodo: Todo): void {
    const index = this.todos.findIndex((todo) => todo.srno === editedtodo.srno);
    if (index !== -1) {
      this.todos[index] = editedtodo;
    }
  }





  
 

}
