import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditingComponent } from './task-editing.component';

describe('TaskEditingComponent', () => {
  let component: TaskEditingComponent;
  let fixture: ComponentFixture<TaskEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
