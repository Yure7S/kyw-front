import { ChangeDetectorRef, Component, EventEmitter, Input, Output, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Member } from 'src/app/core/model/member.interface';

@Component({
  selector: 'app-member-checkbox',
  templateUrl: './member-checkbox.component.html',
  styleUrls: ['./member-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MemberCheckboxComponent),
    multi: true
  }]
})
export class MemberCheckboxComponent implements ControlValueAccessor {
  @Output() onBlur: EventEmitter<any> = new EventEmitter()
  // @Output() toggle: EventEmitter<boolean> = new EventEmitter()
  @Input() idValue?: string
  @Input() member?: Member
  @Input() disabled: boolean = false
  @Input() checked: boolean = false
  @Input() value?: boolean

  changeDetector = inject(ChangeDetectorRef)

  private onChanged = (value: boolean) => { }
  public onTouched = (v: boolean) => { }

  writeValue(value: boolean): void {
    this.onChanged(value)
    this.value = value
    this.changeDetector.detectChanges()
  }

  registerOnChange(fn: (value: boolean) => {}): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
