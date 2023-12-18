import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficeTaskComponent } from './edit-office-task.component';

describe('EditOfficeTaskComponent', () => {
  let component: EditOfficeTaskComponent;
  let fixture: ComponentFixture<EditOfficeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfficeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfficeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
