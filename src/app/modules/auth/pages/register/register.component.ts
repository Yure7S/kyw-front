import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/core/enums/status.enum';
import { CurrentUser } from 'src/app/core/model/current-user.interface';
import { ErrorResponse } from 'src/app/core/model/error-response.interface';
import { Login } from 'src/app/core/model/login.interface';
import { Register } from 'src/app/core/model/register.interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';
import { LoaderService } from 'src/app/core/utils/loader.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder)
  toastService = inject(ToastrService)
  authService = inject(AuthService)
  loaderService = inject(LoaderService)
  router = inject(Router)

  registerType: FormControl = new FormControl()
  response?: ErrorResponse
  statusEnum: typeof Status = Status
  errorMessages = validationErrorMessages

  form = this.formBuilder.group({
    nickname: ['', [Validators.required, Validators.maxLength(128)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
    phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, CustomValidators.identicalPassword('password')]],
  })

  onSubmit(): void {
    if (this.form.valid) {
      const {confirmPassword, ...formValue} = this.form.value
      const registerData = <Register>formValue
      this.authService.register(registerData).subscribe({
        next: (r: CurrentUser) => {
          this.toastService.success('Cadastro realizado com sucesso!', 'Sucesso')
          this.router.navigateByUrl('auth/login')
        },
        error: (error: ErrorResponse) => this.response = error,
      })
    } else this.toastService.warning('Dados inválidos!', 'Alerta')
  }
}
