import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() routerLinkValue?: string;
  @Input() titleValue: string = ''
  @Input() fullWidth?: boolean = false
  @Input() status?: string
  @Output() onClick: EventEmitter<any> = new EventEmitter()
}
