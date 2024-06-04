import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { DetailsComponent } from './pages/details/details.component';
import { MembersComponent } from './pages/members/members.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateProjectComponent,
    DetailsComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingModule,
    SharedModule
  ]
})
export class CreateProjectModule { }
