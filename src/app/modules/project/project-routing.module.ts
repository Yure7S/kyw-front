import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SidebarComponent } from 'src/app/shared/components/sidebars/sidebar/sidebar.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectChatComponent } from './pages/project-chat/project-chat.component';
import { ProjectTasksComponent } from './pages/project-tasks/project-tasks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projetos' },
  {
    path: 'projetos', component: ProjectsComponent,
    children: [
      {
        path: ':projectId', component: ProjectDetailsComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'tarefas' },
          { path: 'tarefas', component: ProjectTasksComponent },
          { path: 'chat', component: ProjectChatComponent },
          { path: 'chat-privado', component: SidebarComponent },
          { path: 'membros', component: SidebarComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
