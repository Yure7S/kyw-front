import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-container',
  templateUrl: './single-container.component.html',
  styleUrls: ['./single-container.component.scss']
})
export class SingleContainerComponent {
 @Input() noPadding: boolean = false
}
