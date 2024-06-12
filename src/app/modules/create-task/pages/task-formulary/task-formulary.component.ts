import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Criticality } from 'src/app/core/enums/criticality.enum';
import { Status } from 'src/app/core/enums/status.enum';
import { TaskService } from 'src/app/core/service/task.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-task-formulary',
  templateUrl: './task-formulary.component.html',
  styleUrls: ['./task-formulary.component.scss']
})
export class TaskFormularyComponent {

  taskService = inject(TaskService)
  toastService = inject(ToastrService)
  formBuilder = inject(FormBuilder)

  errorMessages = validationErrorMessages
  statusEnum: typeof Status = Status 

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(128)]],
    criticality: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
  })

  onSubmit() {

  }
}
