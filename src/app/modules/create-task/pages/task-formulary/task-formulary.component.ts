import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Status } from 'src/app/core/enums/status.enum';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-task-formulary',
  templateUrl: './task-formulary.component.html',
  styleUrls: ['./task-formulary.component.scss']
})
export class TaskFormularyComponent {

  formBuilder = inject(FormBuilder)
  errorMessages = validationErrorMessages
  statusEnum: typeof Status = Status 

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(128)]],
    description: ['', [Validators.required, Validators.maxLength(258)]],
  })

  onSubmit() {

  }
}
