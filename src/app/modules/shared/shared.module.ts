import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInputComponent } from '../../shared/components/main-input/main-input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ErrorSpanComponent } from '../../shared/components/error-span/error-span.component';
import { IdValuePipe } from '../../shared/pipes/id-value.pipe';
import { ValidationErrorPipe } from '../../shared/pipes/validation-error.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContainerComponent } from '../../shared/compontents/card-container/card-container.component';
import { SeparatorRowComponent } from '../../shared/compontents/separator-row/separator-row.component';
import { Title1Component } from '../../shared/compontents/title-1/title-1.component';
import { ParagraphComponent } from '../../shared/compontents/paragraph/paragraph.component';
import { ButtonMainActionComponent } from '../../shared/compontents/buttons/button-main-action/button-main-action.component';
import { ArrowRedirectComponent } from '../../shared/compontents/arrow-redirect/arrow-redirect.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainInputComponent,
    ErrorSpanComponent,
    IdValuePipe,
    ValidationErrorPipe,
    CardContainerComponent,
    SeparatorRowComponent,
    Title1Component,
    ParagraphComponent,
    ButtonMainActionComponent,
    ArrowRedirectComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    MainInputComponent,
    ReactiveFormsModule,
    CardContainerComponent,
    SeparatorRowComponent,
    Title1Component,
    ParagraphComponent,
    ButtonMainActionComponent,
    ArrowRedirectComponent,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }
