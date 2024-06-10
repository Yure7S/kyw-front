import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/core/enums/status.enum';
import { CurrentUser } from 'src/app/core/model/current-user.interface';
import { ErrorResponse } from 'src/app/core/model/error-response.interface';
import { Login } from 'src/app/core/model/login.interface';
import { ProjectInput } from 'src/app/core/model/project-input.interface';
import { ProjectService } from 'src/app/core/service/project.service';
import { LoaderService } from 'src/app/core/utils/loader.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {
  formBuilder = inject(FormBuilder)
  toastService = inject(ToastrService)
  loaderService = inject(LoaderService)
  changeDetector = inject(ChangeDetectorRef)
  projectService = inject(ProjectService)
  router = inject(Router)

  statusEnum: typeof Status = Status
  errorMessages = validationErrorMessages
  profileImage?: File

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(128)]],
    description: ['', [Validators.required, Validators.maxLength(258)]],
  })

  ngAfterViewInit(): void {
    this.form.patchValue(this.projectService.projectInputSig()!)
    this.profileImage = this.projectService.projectInputSig()?.image
    this.changeDetector.detectChanges()
  }

  onSubmit(): void {
    if (this.form.valid) {
      const projectDetails = <ProjectInput>this.form.value
      projectDetails.image = this.profileImage
      this.projectService.projectInputSig.update(v => v = projectDetails)
      this.router.navigateByUrl('/criar-projeto/membros')
    } else this.toastService.warning('Dados inválidos!', 'Alerta')
  }
}
