import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-creation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-creation.component.html',
  styleUrl: './task-creation.component.scss'
})
export class TaskCreationComponent {
  currentDate: string;
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    status: false,
  };

  constructor(private taskService: TaskService, private router: Router) {
    this.currentDate = new Date().toISOString().slice(0, 10);
  }

  // Method to create a new task
  createTask(): void {
    if (this.newTask.title.trim() !== '' && this.newTask.description.trim() !== '') {
      this.taskService.createTask(this.newTask);
      this.router.navigate(['/tasks']);
    } else {
      alert('Please enter title and description for the task.');
    }
  }
}
