import { trigger, transition, style, animate, state } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/core/enums/status.enum';
import { ModalComponentInterface } from 'src/app/core/model/modal-component.interface';
import { LoaderService } from 'src/app/core/utils/loader.service';
import { validationErrorMessages } from '../../error-message-validators/validation-error-messages';
import { Member } from 'src/app/core/model/member.interface';
import { CheckboxItem } from 'src/app/core/model/checkbox-item.model';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity: '0'
        }),
        animate('150ms ease', style({
          transform: 'scale(1)',
          opacity: '1'
        })),
      ]),
      transition(':leave', [
        animate('150ms ease', style({
          transform: 'scale(0)',
          opacity: '0'
        }))
      ])
    ]),
    trigger('containerAnimation', [
      state('initial', style({
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
      })),
      state('final', style({
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      })),
      transition('initial<=>final', animate('350ms ease'))
    ]),
  ]
})
export class MemberModalComponent implements ModalComponentInterface, AfterViewInit {
  @Input() title?: string
  @Input() description?: string
  @Input() active: boolean = true
  @Input() memberList: Member[] = []
  @Output() close: EventEmitter<any> = new EventEmitter()
  @Output() submit: EventEmitter<any> = new EventEmitter()

  statusEnum: typeof Status = Status
  checkboxMemberList: CheckboxItem<Member>[] = []

  ngAfterViewInit(): void {
    this.checkboxMemberList = this.memberList.map(item => new CheckboxItem(item))
  }

  toggleMember(value: boolean, index: number) {
    this.checkboxMemberList![index].selected = value
  }

  onClose(): void {
    this.close.emit()
  }

  onSubmit(): void {
    let selectedMembers: Member[] = []
    this.checkboxMemberList.filter(item => item.selected).forEach((item) => {
      const {selected, data} = item
      selectedMembers.push(data)
    })
    this.submit.emit(selectedMembers)
  }
}
