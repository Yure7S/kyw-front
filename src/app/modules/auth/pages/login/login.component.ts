import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/core/model/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formBuilder = inject(FormBuilder)
  toastService = inject(ToastrService)

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  onSubmit(): void {
    if(this.form.invalid) {
      this.toastService.error('Dados inválidos', 'Erros')
      return
    } 
    
    const loginData = <Login>this.form.value
    console.log(loginData)
  }
}
