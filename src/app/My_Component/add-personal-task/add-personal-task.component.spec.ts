import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalTaskComponent } from './add-personal-task.component';

describe('AddPersonalTaskComponent', () => {
  let component: AddPersonalTaskComponent;
  let fixture: ComponentFixture<AddPersonalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonalTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
