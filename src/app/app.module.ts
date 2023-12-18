// Example of adding 'app-addtask' component to declarations array in a module
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './My_Component/addtask/addtask.component';
import { TodoListComponent } from './My_Component/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './My_Component/task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginPageComponent } from './My_Component/login-page/login-page.component';
import { CreateAccountComponent } from './My_Component/create-account/create-account.component';
import { FirstPageComponent } from './My_Component/first-page/first-page.component';
import { PersonalTaskComponent } from './My_Component/personal-task/personal-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { OfficeTaskComponent } from './My_Component/office-task/office-task.component';
import { OfficeTodoListComponent } from './My_Component/office-todo-list/office-todo-list.component';
import { AddOfficeTaskComponent } from './My_Component/add-office-task/add-office-task.component';
import { PersonalTodoListComponent } from './My_Component/personal-todo-list/personal-todo-list.component';
import { AddPersonalTaskComponent } from './My_Component/add-personal-task/add-personal-task.component';
import { AboutSectionComponent } from './My_Component/about-section/about-section.component';
import { EditTaskComponent } from './My_Component/edit-task/edit-task.component';
import { EditPersonalTaskComponent } from './My_Component/edit-personal-task/edit-personal-task.component';
import { EditOfficeTaskComponent } from './My_Component/edit-office-task/edit-office-task.component'; 



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddtaskComponent,
    TaskComponent,
    LoginPageComponent,
    CreateAccountComponent,
    FirstPageComponent,
    PersonalTaskComponent,
    OfficeTaskComponent,
    OfficeTodoListComponent,
    AddOfficeTaskComponent,
    PersonalTodoListComponent,
    AddPersonalTaskComponent,
    AboutSectionComponent,
    EditTaskComponent,
    EditPersonalTaskComponent,
    EditOfficeTaskComponent,
    

    // Add the 'app-addtask' component here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
  // Other module properties
})
export class AppModule { }



