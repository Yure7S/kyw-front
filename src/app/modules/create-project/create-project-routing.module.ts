import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { DetailsComponent } from './pages/details/details.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
  {
    path: '', component: CreateProjectComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'detalhes'},
      {path: 'detalhes', component: DetailsComponent},
      {path: 'membros', component: MembersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProjectRoutingModule { }
