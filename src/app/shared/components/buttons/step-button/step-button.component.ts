import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-button',
  templateUrl: './step-button.component.html',
  styleUrls: ['./step-button.component.scss']
})
export class StepButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  @Input() routerLinkValue?: string;
  @Input() back: boolean = false;
  @Input() normal: boolean = false;
  @Input() titleValue: string = ''
  @Input() status?: string
}
