import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-close-button',
  template: '<button><fa-icon icon="xmark"/></button>',
  styleUrls: ['./close-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseButtonComponent {

}
