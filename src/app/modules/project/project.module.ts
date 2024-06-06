import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarProjectCardComponent } from './components/sidebar-project-card/sidebar-project-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    SidebarProjectCardComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})
export class ProjectModule { }
