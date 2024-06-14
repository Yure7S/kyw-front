import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormularyComponent } from './pages/task-formulary/task-formulary.component';

const routes: Routes = [
  {path: '', component: TaskFormularyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTaskRoutingModule { }
