// // todo.service.ts
// import { Injectable } from '@angular/core';
// import { Todo } from './Todo'; 

// @Injectable({
//   providedIn: 'root',
// })
// export class TodoService {
//   private todos: Todo[] = [];

//   getTodos(): Todo[] {
//     // Retrieve todos from localStorage
//     const todosData = localStorage.getItem('todos');
//     this.todos = todosData ? JSON.parse(todosData) : [];
//     return this.todos;
//   }

//   addTodo(todo: Todo): void {
//     // Add a new todo
//     this.todos.push(todo);
//     this.saveTodos();
//   }

//   editTodo(editedTodo: Todo): void {
//     // Find the todo by id and update it
//     const index = this.todos.findIndex((todo) => todo.id === editedTodo.id);
//     if (index !== -1) {
//       this.todos[index] = editedTodo;
//       this.saveTodos();
//     }
//   }

//   private saveTodos(): void {
//     // Save todos to localStorage
//     localStorage.setItem('todos', JSON.stringify(this.todos));
//   }
// }
