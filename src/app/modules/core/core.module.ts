import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { IconsSidebarComponent } from './components/icons-sidebar/icons-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    IconsSidebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
