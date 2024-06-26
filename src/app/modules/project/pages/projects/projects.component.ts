import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { GetterResponse } from 'src/app/core/model/getter-response.interface';
import { Project } from 'src/app/core/model/project.interface';
import { ProjectService } from 'src/app/core/service/project.service';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  trackByService = inject(TrackByService)
  projectService = inject(ProjectService)
  router = inject(Router)

  projectList$?: Observable<Project[]>

  ngOnInit(): void {
    this.projectList$ = this.projectService.getAll()
    // this.projectList$.subscribe(r => this.router.navigateByUrl(`projetos/${r[0].id}`))
  }
}