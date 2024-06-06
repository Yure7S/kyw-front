import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetterResponse } from 'src/app/core/model/getter-response.interface';
import { Project } from 'src/app/core/model/project.interface';
import { Sidebar } from 'src/app/core/model/sidebar.interface';
import { ProjectService } from 'src/app/core/service/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectService = inject(ProjectService)
  activateRoute = inject(ActivatedRoute)
  projectId: string = this.activateRoute.snapshot.paramMap.get('projectId') ?? ''

  $project?: Observable<Project>

  sidebarContent: Sidebar[] = [
    {
      content: 'Chat',
      link: 'chat'
    },
    {
      content: 'Chat privado',
      link: 'chat-privado'
    },
    {
      content: 'Tarefas',
      link: 'tarefas'
    },
    {
      content: 'Membros',
      link: 'membros'
    },
  ]

  ngOnInit(): void {
    this.$project = this.projectService.getById(this.projectId)
  }
}
