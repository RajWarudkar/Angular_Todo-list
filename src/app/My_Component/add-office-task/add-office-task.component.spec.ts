import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeTaskComponent } from './add-office-task.component';

describe('AddOfficeTaskComponent', () => {
  let component: AddOfficeTaskComponent;
  let fixture: ComponentFixture<AddOfficeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfficeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
