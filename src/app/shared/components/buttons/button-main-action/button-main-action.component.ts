import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-main-action',
  templateUrl: './button-main-action.component.html',
  styleUrls: ['./button-main-action.component.scss']
})
export class ButtonMainActionComponent {
 @Input() fullWidth: boolean = false
 @Input() loading: boolean = false
 @Output() onCLick: EventEmitter<any> = new EventEmitter()
}
