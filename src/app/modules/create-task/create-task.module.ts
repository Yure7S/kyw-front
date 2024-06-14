import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { TaskFormularyComponent } from './pages/task-formulary/task-formulary.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TaskFormularyComponent
  ],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    SharedModule
  ]
})
export class CreateTaskModule { }
