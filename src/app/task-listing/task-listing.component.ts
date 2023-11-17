import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-task-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-listing.component.html',
  styleUrl: './task-listing.component.scss'
})
export class TaskListingComponent implements OnInit {
  displayType: string = 'flex'; // Default display type

  toggleDisplay(): void {
    this.displayType = this.displayType === 'flex' ? 'grid' : 'flex';
  }
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }

  toggleTaskStatus(task: Task): void {
    task.status = !task.status;
    this.taskService.updateTask(task);
  }
}