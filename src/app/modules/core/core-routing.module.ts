import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  {path: 'criar-projeto', loadChildren: () => import('../create-project/create-project.module').then(m => m.CreateProjectModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
