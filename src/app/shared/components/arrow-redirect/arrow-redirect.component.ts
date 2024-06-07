import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-redirect',
  templateUrl: './arrow-redirect.component.html',
  styleUrls: ['./arrow-redirect.component.scss']
})
export class ArrowRedirectComponent {
  @Input() routerLinkValue: string = ''
}
