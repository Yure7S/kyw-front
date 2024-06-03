import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInputComponent } from '../../shared/components/main-input/main-input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ErrorSpanComponent } from '../../shared/components/error-span/error-span.component';
import { IdValuePipe } from '../../shared/pipes/id-value.pipe';
import { ValidationErrorPipe } from '../../shared/pipes/validation-error.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContainerComponent } from '../../shared/components/card-container/card-container.component';
import { SeparatorRowComponent } from '../../shared/components/separator-row/separator-row.component';
import { Title1Component } from '../../shared/components/title-1/title-1.component';
import { ParagraphComponent } from '../../shared/components/paragraph/paragraph.component';
import { ButtonMainActionComponent } from '../../shared/components/buttons/button-main-action/button-main-action.component';
import { ArrowRedirectComponent } from '../../shared/components/arrow-redirect/arrow-redirect.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { HighlightLinkComponent } from '../../shared/components/highlight-link/highlight-link.component';
import { SingleContainerComponent } from '../../shared/components/single-container/single-container.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { StepButtonComponent } from '../../shared/components/buttons/step-button/step-button.component';
import { ProfileImageInputComponent } from '../../shared/components/profile-image-input/profile-image-input.component';



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
    HighlightLinkComponent,
    SingleContainerComponent,
    TextareaComponent,
    StepButtonComponent,
    ProfileImageInputComponent,
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
    IdValuePipe,
    MainInputComponent,
    ReactiveFormsModule,
    CardContainerComponent,
    SeparatorRowComponent,
    Title1Component,
    ParagraphComponent,
    ButtonMainActionComponent,
    ArrowRedirectComponent,
    HighlightLinkComponent,
    SingleContainerComponent,
    TextareaComponent,
    StepButtonComponent,
    ProfileImageInputComponent,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }
