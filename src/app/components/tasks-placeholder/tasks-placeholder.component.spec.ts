import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPlaceholderComponent } from './tasks-placeholder.component';

describe('TasksPlaceholderComponent', () => {
  let component: TasksPlaceholderComponent;
  let fixture: ComponentFixture<TasksPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
