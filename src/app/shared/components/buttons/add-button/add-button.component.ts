import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  @Input() smaller: boolean = false
  @Input() titleValue: string = ''
  @Input() routerLinkValue: string = ''
}
