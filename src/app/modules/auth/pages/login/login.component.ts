import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/core/enums/status.enum';
import { CurrentUser } from 'src/app/core/model/current-user.interface';
import { ErrorResponse } from 'src/app/core/model/error-response.interface';
import { LoginResponse } from 'src/app/core/model/login-response.interface';
import { Login } from 'src/app/core/model/login.interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';
import { LoaderService } from 'src/app/core/utils/loader.service';
import { validationErrorMessages } from 'src/app/shared/error-message-validators/validation-error-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formBuilder = inject(FormBuilder)
  currentUserService = inject(CurrentUserService)
  toastService = inject(ToastrService)
  authService = inject(AuthService)
  loaderService = inject(LoaderService)
  router = inject(Router)

  response?: ErrorResponse
  statusEnum: typeof Status = Status
  errorMessages = validationErrorMessages

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  onSubmit(): void {
    if (this.form.valid) {
      const loginData = <Login>this.form.value
      this.authService.login(loginData).subscribe({
        next: (r: CurrentUser) => {
          this.currentUserService.currentUserSig.set(r)
          this.currentUserService.setLocalCurrentUser()
          this.toastService.success('Login realizado com sucesso!', 'Sucesso')
          this.router.navigateByUrl('')
        },
        error: (error: ErrorResponse) => this.response = error,
      })
    } else this.toastService.warning('Dados inválidos!', 'Alerta')
  }
}
