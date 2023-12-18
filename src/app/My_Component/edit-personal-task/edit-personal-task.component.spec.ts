import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalTaskComponent } from './edit-personal-task.component';

describe('EditPersonalTaskComponent', () => {
  let component: EditPersonalTaskComponent;
  let fixture: ComponentFixture<EditPersonalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonalTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
