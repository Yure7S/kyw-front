import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-register-type-switch',
  templateUrl: './register-type-switch.component.html',
  styleUrls: ['./register-type-switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RegisterTypeSwitchComponent),
    multi: true
  }]
})
export class RegisterTypeSwitchComponent {
  @Input() value?: boolean

  private onChanged = (value: boolean) => { }
  public onTouched = (v: boolean) => { }

  writeValue(value: boolean): void {
    this.onChanged(value)
    this.value = value
  }

  registerOnChange(fn: (value: boolean) => {}): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {}
}
