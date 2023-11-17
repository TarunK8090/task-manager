import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-editing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './task-editing.component.html',
  styleUrl: './task-editing.component.scss'
})

export class TaskEditingComponent implements OnInit {

  taskId!: number;
  task!: Task;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.task = this.taskService.getTaskById(this.taskId)!;
    });
  }

  // Method to update a existing task
  updateTask(): void {
    if (this.task.title.trim() !== '' && this.task.description.trim() !== '') {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    } else {
      alert('Please enter title and description for the task.');
    }
  }
}