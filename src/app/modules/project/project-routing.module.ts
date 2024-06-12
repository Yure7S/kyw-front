import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SidebarComponent } from 'src/app/shared/components/sidebars/sidebar/sidebar.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectChatComponent } from './pages/project-chat/project-chat.component';
import { ProjectTasksComponent } from './pages/project-tasks/project-tasks.component';
import { TaskDetailsComponent } from '../task/pages/task-details/task-details.component';
import { ProjectTaskDetailsComponent } from './pages/project-task-details/project-task-details.component';
import { ProjectTaskInfoComponent } from './pages/project-task-info/project-task-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projetos' },
  {
    path: 'projetos', component: ProjectsComponent,
    children: [
      {
        path: ':projectId', component: ProjectDetailsComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'tarefas' },
          {
            path: 'tarefas', component: ProjectTasksComponent,
            children: [
              {
                path: ':taskId', component: ProjectTaskDetailsComponent,
                children: [
                  { path: '', pathMatch: 'full', redirectTo: 'detalhes' },
                  { path: 'detalhes', component: ProjectTaskInfoComponent },
                  { path: 'chat', component: ProjectChatComponent },
                ]
              }
            ]
          },
          { path: 'chat', component: ProjectChatComponent },
          { path: 'chat-privado', component: ProjectChatComponent },
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
