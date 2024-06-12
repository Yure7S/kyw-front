import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, shareReplay, switchMap } from 'rxjs';
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

  $project?: Observable<Project>

  ngOnInit(): void {
    this.$project = this.activateRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const projectId = params.get('projectId')?.toString() ?? ''
        return this.projectService.getById(projectId)
      }), shareReplay()
    )
  }

  sidebarContent: Sidebar[] = [
    {
      content: 'Tarefas',
      link: 'tarefas'
    },
    {
      content: 'Chat',
      link: 'chat'
    },
    {
      content: 'Chat privado',
      link: 'chat-privado'
    },
    {
      content: 'Membros',
      link: 'membros'
    },
  ]
}
