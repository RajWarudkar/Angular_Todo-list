import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './My_Component/addtask/addtask.component';
import { TodoListComponent } from './My_Component/todo-list/todo-list.component';
import { TaskComponent } from './My_Component/task/task.component';
import { PersonalTaskComponent } from './My_Component/personal-task/personal-task.component';
import { OfficeTodoListComponent } from './My_Component/office-todo-list/office-todo-list.component';
import { PersonalTodoListComponent } from './My_Component/personal-todo-list/personal-todo-list.component';
import { AboutSectionComponent } from './My_Component/about-section/about-section.component';
import { FirstPageComponent } from './My_Component/first-page/first-page.component';
import { LoginPageComponent } from './My_Component/login-page/login-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'task', component: TaskComponent },
  { path: 'personal-task', component: PersonalTaskComponent },
  { path: 'office-todo-list', component: OfficeTodoListComponent },
  { path: 'personal-todo-list', component: PersonalTodoListComponent },
  { path: 'about-section', component: AboutSectionComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'login-page', component: LoginPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
