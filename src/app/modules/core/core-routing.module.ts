import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'projetos' },
      { path: 'projetos', loadChildren: () => import('../project/project.module').then(m => m.ProjectModule) },
      { path: 'tarefas', loadChildren: () => import('../task/task.module').then(m => m.TaskModule) },
      { path: 'notificacoes', loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  { path: 'criar-projeto', loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
