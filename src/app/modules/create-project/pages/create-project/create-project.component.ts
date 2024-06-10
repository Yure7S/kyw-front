import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/core/service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  projectService = inject(ProjectService)
}
