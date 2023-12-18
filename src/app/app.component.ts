import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TodoListComponent } from './My_Component/todo-list/todo-list.component';
import { AddtaskComponent } from './My_Component/addtask/addtask.component';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  isOpen = false;

  constructor(private sidebarService: SidebarService, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closePopup() {
    this.sidebarService.toggleSidebar();
  }


}
