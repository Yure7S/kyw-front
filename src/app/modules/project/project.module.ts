import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarProjectCardComponent } from './components/sidebar-project-card/sidebar-project-card.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectChatComponent } from './pages/project-chat/project-chat.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    SidebarProjectCardComponent,
    ProjectDetailsComponent,
    ProjectChatComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})
export class ProjectModule { }
