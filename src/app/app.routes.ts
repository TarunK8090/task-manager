import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { TaskEditingComponent } from './task-editing/task-editing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListingComponent },
  { path: 'tasks/create', component: TaskCreationComponent },
  { path: 'tasks/edit/:id', component: TaskEditingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}