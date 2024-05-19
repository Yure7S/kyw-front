import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInputComponent } from '../../shared/components/main-input/main-input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ErrorSpanComponent } from '../../shared/components/error-span/error-span.component';
import { IdValuePipe } from '../../shared/pipes/id-value.pipe';
import { ValidationErrorPipe } from '../../shared/pipes/validation-error.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainInputComponent,
    ErrorSpanComponent,
    IdValuePipe,
    ValidationErrorPipe
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule
  ],
  exports: [
    MainInputComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }
