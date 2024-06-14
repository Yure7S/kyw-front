import { ChangeDetectorRef, Component, EventEmitter, Input, Output, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Member } from 'src/app/core/model/member.interface';

@Component({
  selector: 'app-member-checkbox',
  templateUrl: './member-checkbox.component.html',
  styleUrls: ['./member-checkbox.component.scss']
})
export class MemberCheckboxComponent {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter()
  @Input() idValue?: string
  @Input() member?: Member
  @Input() checked: boolean = false
  @Input() value?: boolean
}
