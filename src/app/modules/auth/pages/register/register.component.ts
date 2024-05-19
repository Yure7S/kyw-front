import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder)

  registerType: FormControl = new FormControl(true)

  form = this.formBuilder.group({
    tempControl: [''],
  })
}
