import { Component } from '@angular/core';
import { Sidebar } from 'src/app/core/model/sidebar.interface';

@Component({
  selector: 'app-project-task-details',
  templateUrl: './project-task-details.component.html',
  styleUrls: ['./project-task-details.component.scss']
})
export class ProjectTaskDetailsComponent {
  sidebarContent: Sidebar[] = [
    {
      content: 'Detalhes',
      link: 'detalhes'
    },
    {
      content: 'Chat privado',
      link: 'chat'
    },
  ]
}
