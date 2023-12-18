import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './My_Component/addtask/addtask.component';
import { TodoListComponent } from './My_Component/todo-list/todo-list.component';
import { TaskComponent } from './My_Component/task/task.component';
import { CreateAccountComponent } from './My_Component/create-account/create-account.component';
import { PersonalTaskComponent } from './My_Component/personal-task/personal-task.component';
import { OfficeTodoListComponent } from './My_Component/office-todo-list/office-todo-list.component';
import { PersonalTodoListComponent } from './My_Component/personal-todo-list/personal-todo-list.component';
import { AboutSectionComponent } from './My_Component/about-section/about-section.component';
const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addtask/:id', component: AddtaskComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'task', component: TaskComponent },
  { path: 'createaccount', component: CreateAccountComponent },
  { path: 'personal-task', component: PersonalTaskComponent },
  { path: 'office-todo-list', component: OfficeTodoListComponent },
  { path: 'personal-todo-list', component: PersonalTodoListComponent },
  { path: 'about-section', component: AboutSectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
