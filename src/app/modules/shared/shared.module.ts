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
import { AddButtonComponent } from '../../shared/components/buttons/add-button/add-button.component';
import { DropdownMenuComponent } from '../../shared/components/dropdown-menu/dropdown-menu.component';
import { MenuButtonComponent } from '../../shared/components/buttons/menu-button/menu-button.component';
import { ClickOutsideCloseDirective } from '../../shared/directives/click-outside-close.directive';
import { SidebarComponent } from '../../shared/components/sidebars/sidebar/sidebar.component';
import { SearchInputComponent } from 'src/app/shared/components/search-input/search-input.component';
import { MessagePanelComponent } from '../../shared/components/message-panel/message-panel.component';
import { SidebarTemplateComponent } from '../../shared/components/templates/sidebar-template/sidebar-template.component';
import { NavTabComponent } from '../../shared/components/nav-tab/nav-tab.component';
import { TaskStatusComponent } from '../../shared/components/task-status/task-status.component';
import { TaskTitleComponent } from '../../shared/components/task-title/task-title.component';
import { H3TitleComponent } from 'src/app/shared/components/h3-title/h3-title.component';
import { TaskCriticalityComponent } from '../../shared/components/task-criticality/task-criticality.component';
import { TaskInfoTemplateComponent } from '../../shared/components/templates/task-info-template/task-info-template.component';
import { PrimaryButtonComponent } from '../../shared/components/buttons/primary-button/primary-button.component';
import { ListOfMembersComponent } from '../../shared/components/list-of-members/list-of-members.component';
import { MemberCardComponent } from '../../shared/components/member-card/member-card.component';
import { ProfileImageComponent } from '../../shared/components/profile-image/profile-image.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { AddLinkComponent } from '../../shared/components/add-link/add-link.component';
import { FileButtonComponent } from '../../shared/components/buttons/file-button/file-button.component';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';
import { FileSizePipe } from 'src/app/shared/pipes/file-size.pipe';
import { MemberModalComponent } from 'src/app/shared/components/member-modal/member-modal.component';
import { CloseButtonComponent } from '../../shared/components/buttons/close-button/close-button.component';
import { MemberCheckboxComponent } from '../../shared/components/member-checkbox/member-checkbox.component';
import { MainSelectComponent } from '../../shared/components/main-select/main-select.component';
import { SendButtonComponent } from '../../shared/components/buttons/send-button/send-button.component';
import { MessageCardComponent } from '../../shared/components/message-card/message-card.component';
import { HideItemByRouteDirective } from '../../shared/directives/hide-item-by-route.directive';



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
    AddButtonComponent,
    DropdownMenuComponent,
    MenuButtonComponent,
    ClickOutsideCloseDirective,
    SidebarComponent,
    SearchInputComponent,
    MessagePanelComponent,
    SidebarTemplateComponent,
    NavTabComponent,
    TaskStatusComponent,
    TaskTitleComponent,
    H3TitleComponent,
    TaskCriticalityComponent,
    TaskInfoTemplateComponent,
    PrimaryButtonComponent,
    ListOfMembersComponent,
    MemberCardComponent,
    ProfileImageComponent,
    LoaderComponent,
    AddLinkComponent,
    FileButtonComponent,
    FileCardComponent,
    FileSizePipe,
    MemberModalComponent,
    CloseButtonComponent,
    MemberCheckboxComponent,
    MainSelectComponent,
    SendButtonComponent,
    MessageCardComponent,
    HideItemByRouteDirective
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    IconsModule,
    RouterModule,
  ],
  exports: [
    IconsModule,
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
    AddButtonComponent,
    DropdownMenuComponent,
    MenuButtonComponent,
    SidebarComponent,
    SearchInputComponent,
    MessagePanelComponent,
    SidebarTemplateComponent,
    NavTabComponent,
    TaskStatusComponent,
    TaskTitleComponent,
    H3TitleComponent,
    TaskCriticalityComponent,
    TaskInfoTemplateComponent,
    PrimaryButtonComponent,
    ListOfMembersComponent,
    MemberCardComponent,
    ProfileImageComponent,
    AddLinkComponent,
    FileButtonComponent,
    FileCardComponent,
    FileSizePipe,
    MemberModalComponent,
    CloseButtonComponent,
    SendButtonComponent,
    MessageCardComponent,
    HideItemByRouteDirective,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class SharedModule { }