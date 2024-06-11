import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/core/enums/status.enum';
import { ErrorResponse } from 'src/app/core/model/error-response.interface';
import { ProjectInput } from 'src/app/core/model/project-input.interface';
import { Project } from 'src/app/core/model/project.interface';
import { ProjectService } from 'src/app/core/service/project.service';
import { LoaderService } from 'src/app/core/utils/loader.service';
import { TrackByService } from 'src/app/core/utils/track-by.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  formBuilder = inject(FormBuilder)
  toastService = inject(ToastrService)
  loaderService = inject(LoaderService)
  changeDetector = inject(ChangeDetectorRef)
  trackByService = inject(TrackByService)
  projectService = inject(ProjectService)
  router = inject(Router)

  emailControl = new FormControl('', [Validators.required, Validators.email])
  errorMessages = validationErrorMessages
  memberEmailList: Array<string> = []
  statusEnum: typeof Status = Status
  response?: ErrorResponse

  removeEmail(email: string): void {
    this.memberEmailList = this.memberEmailList.filter(item => item != email)
  }

  addEmail(): void {
    const value = this.emailControl.value!.trim()
    if (this.emailControl.valid) {
      if (!this.memberEmailList.includes(value)) {
        this.memberEmailList.push(value)
        this.emailControl.reset()
      } else this.toastService.warning('Você já inseriu este email', 'Alerta')
    } else this.toastService.warning('E-mail inválido!', 'Alerta')
  }

  ngAfterViewInit(): void {
    this.memberEmailList = this.projectService.projectInputSig()?.members ?? []
    this.changeDetector.detectChanges()
  }

  onSubmit(): void {
    if (!!this.memberEmailList.length) {
      const formData = new FormData()
      const projectInputSig = this.projectService.projectInputSig
      projectInputSig.mutate(v => v!.members = this.memberEmailList)
      const { image, ...projectInput } = projectInputSig()!
      formData.append('image', image!)
      Object.keys(projectInput).forEach((value: string) => {
        formData.append(value, (projectInput as any)[value])
      })
      this.projectService.create(formData).subscribe({
        next: (r: Project) => {
          this.toastService.success('Projeto criado com sucesso!', 'Sucesso')
          this.router.navigateByUrl('')
          projectInputSig.set(null)
        },
        error: (error: ErrorResponse) => this.response = error,
      })
    } else this.toastService.warning('Dados inválidos!', 'Alerta')
  }
}
