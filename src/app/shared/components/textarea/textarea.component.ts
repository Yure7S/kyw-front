import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent {
  @Output() onBlur: EventEmitter<any> = new EventEmitter()
  @Input({ required: true }) placeholder!: string
  @Input({ required: true }) control!: FormControl
  @Input() errorMessages!: object
  @Input() isRequired: boolean = true
  @Input() isDisabled: boolean = false
  @Input() optional: boolean = false
  @Input() value?: string = ''

  private onChanged = (value: string) => { }
  public onTouched = (v: any) => { }

  writeValue(value: string): void {
    this.onChanged(value)
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
}
