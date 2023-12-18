import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTodoListComponent } from './office-todo-list.component';

describe('OfficeTodoListComponent', () => {
  let component: OfficeTodoListComponent;
  let fixture: ComponentFixture<OfficeTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
