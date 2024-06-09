import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { TaskInfoComponent } from './pages/task-info/task-info.component';

const routes: Routes = [
  {
    path: '', component: TasksComponent,
    children: [
      {
        path: ':taskId', component: TaskDetailsComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'detalhes' },
          { path: 'detalhes', component: TaskInfoComponent },
          { path: 'chat', component: SidebarComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
