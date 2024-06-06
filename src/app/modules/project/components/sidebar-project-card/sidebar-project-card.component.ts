import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';

@Component({
  selector: 'app-sidebar-project-card',
  templateUrl: './sidebar-project-card.component.html',
  styleUrls: ['./sidebar-project-card.component.scss']
})
export class SidebarProjectCardComponent {
  @Input() project!: Project
}
