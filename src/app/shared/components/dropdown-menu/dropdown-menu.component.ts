import { Component, Input } from '@angular/core';
import { dropdownMenuAnimation } from '../../animations/dropdown-menu.animation';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  animations: [dropdownMenuAnimation]
})
export class DropdownMenuComponent {
  @Input() active: boolean = false

  toggle() {
    this.active = !this.active
  }
}
