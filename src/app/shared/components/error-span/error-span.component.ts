import { Component } from '@angular/core';

@Component({
  selector: 'app-error-span',
  template: `<span><ng-content></ng-content></span>`,
  styleUrls: ['./error-span.component.scss'],
})
export class ErrorSpanComponent {}
