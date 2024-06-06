import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarTaskCardComponent } from './components/sidebar-task-card/sidebar-task-card.component';


@NgModule({
  declarations: [
    TasksComponent,
    SidebarTaskCardComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
