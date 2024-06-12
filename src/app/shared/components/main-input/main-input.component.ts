import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MainInputComponent),
    multi: true
  }]
})
export class MainInputComponent {
  @Output() onBlur: EventEmitter<any> = new EventEmitter()
  @Input({ required: true }) placeholder!: string
  @Input({ required: true }) control!: FormControl
  @Input() errorMessages!: object
  @Input() isRequired: boolean = true
  @Input() isDisabled: boolean = false
  @Input() maskValue?: string
  @Input() formSubmitted: boolean = false
  @Input() white: boolean = false
  @Input() type?: string
  @Input() value?: string

  private onChanged = (value: string) => { }
  public onTouched = (v: any) => { }

  writeValue(value: string): void {
    const valueTrim = value && value.toString().trim()
    this.onChanged(this.removeSpecialCharacters(valueTrim))
    this.value = value
  }

  registerOnChange(fn: (value: string) => {}): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  handleBlur() {
    this.onBlur.emit()
  }

  removeSpecialCharacters(value: string) {
    return (this.maskValue != undefined) && value
      ? value.toString().replace(/[^a-zA-Z0-9]/g, '')
      : value
  }
}
