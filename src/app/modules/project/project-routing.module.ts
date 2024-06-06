import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SidebarComponent } from 'src/app/shared/components/sidebars/sidebar/sidebar.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'projetos'},
  {
    path: 'projetos', component: ProjectsComponent,
    children: [
      {path: ':projectId', component: ProjectDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
