import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  @Input() primaryIcon?: IconProp
  @Input() secondaryIcon?: IconProp
  @Input() status?: string
  @Input() titleValue: string = ''
}
