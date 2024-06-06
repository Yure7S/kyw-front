import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetterResponse } from 'src/app/core/model/getter-response.interface';
import { Project } from 'src/app/core/model/project.interface';
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

  ngOnInit(): void {
    this.$project = this.projectService.getById(this.projectId)
    this.$project.subscribe(console.log)
  }
}
