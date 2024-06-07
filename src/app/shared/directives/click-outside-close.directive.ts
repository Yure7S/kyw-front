import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[appClickOutsideClose]'
})
export class ClickOutsideCloseDirective {
  @Output() clickOutside: EventEmitter<any> = new EventEmitter()

  element = inject(ElementRef)

  @HostListener('focusout', ['$event'])
  @HostListener('blur', ['$event'])
  onFocusOut(event: any) {
    const isChild: boolean = this.element.nativeElement.contains(event.relatedTarget)
    !isChild && this.clickOutside.emit()
  }
}
