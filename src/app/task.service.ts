// task.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor() {
    this.loadTasksFromLocalStorage();
    // this.tasks = [
    //   {
    //     id: 1,
    //     title: 'Sample Task 1',
    //     description: 'This is a sample task',
    //     dueDate: new Date('2023-12-31'),
    //     status: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Sample Task 2',
    //     description: 'Another sample task',
    //     dueDate: new Date('2023-11-30'),
    //     status: true,
    //   },
    // ];
    // this.tasksSubject.next(this.tasks);
  }

  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.tasksSubject.next(this.tasks);
    }
  }
  private updateLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject;
  }

  getTaskById(taskId: number): Task | undefined {
    const foundTask = this.tasks.find(task => task.id === taskId);
    if (foundTask) {
      // Formatting dueDate to 'YYYY-MM-DD' format before returning
      foundTask.dueDate = new Date(foundTask.dueDate).toISOString().split('T')[0];
      return foundTask;
    }
    return undefined; // Return undefined if task is not found
  }
  createTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
    this.updateLocalStorage();
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.tasksSubject.next(this.tasks);
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(this.tasks);
    this.updateLocalStorage();
  }
}


