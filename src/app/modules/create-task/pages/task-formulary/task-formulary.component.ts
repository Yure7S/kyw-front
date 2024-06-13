import { Component, Renderer2, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Criticality } from 'src/app/core/enums/criticality.enum';
import { Status } from 'src/app/core/enums/status.enum';
import { ProjectService } from 'src/app/core/service/project.service';
import { TaskService } from 'src/app/core/service/task.service';
import { TrackByService } from 'src/app/core/utils/track-by.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-task-formulary',
  templateUrl: './task-formulary.component.html',
  styleUrls: ['./task-formulary.component.scss']
})
export class TaskFormularyComponent {

  taskService = inject(TaskService)
  toastService = inject(ToastrService)
  trackByService = inject(TrackByService)
  projectService = inject(ProjectService)
  activatedRoute = inject(ActivatedRoute)
  formBuilder = inject(FormBuilder)
  renderer = inject(Renderer2)

  errorMessages = validationErrorMessages
  statusEnum: typeof Status = Status
  projectId: string = this.activatedRoute.snapshot.paramMap.get('projectId') ?? ''
  fileList: File[] = []

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(128)]],
    criticality: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
  })

  addMembers() {
    this.projectService.getMembers(this.projectId).subscribe(console.log)
  }
  
  addFile(file: File) {
    if (this.fileList.includes(file)) {
      this.toastService.warning('Você já adicionou este arquivo!', 'Alerta')
    } else this.fileList.push(file)
  }

  removeFile(file: File) {
    this.fileList = this.fileList.filter(item => item !== file)
  }

  downloadFile(file: File) {
    const fileUrl = window.URL.createObjectURL(file)
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', fileUrl);
    link.setAttribute('download', file.name);
    link.click();
    link.remove();
  }

  onSubmit() {

  }
}
