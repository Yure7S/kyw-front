import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('../project/project.module').then(m => m.ProjectModule) },
      { path: 'tarefas', loadChildren: () => import('../task/task.module').then(m => m.TaskModule) },
      { path: 'notificacoes', loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule) },
    ]
  },
  { path: 'criar-projeto', loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule) },
  { path: 'editar-projeto/:projectId', loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule) },
  { path: 'criar-tarefa', loadChildren: () => import('../create-task/create-task.module').then(m => m.CreateTaskModule) },
  { path: 'editar-tarefa/:taskId', loadChildren: () => import('../create-task/create-task.module').then(m => m.CreateTaskModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
