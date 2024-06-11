import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sidebar-project-card',
  templateUrl: './sidebar-project-card.component.html',
  styleUrls: ['./sidebar-project-card.component.scss']
})
export class SidebarProjectCardComponent {
  @Input() project!: Project
  @Input() url!: string
}
