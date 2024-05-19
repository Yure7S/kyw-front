import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-link',
  templateUrl: './highlight-link.component.html',
  styleUrls: ['./highlight-link.component.scss']
})
export class HighlightLinkComponent {
  @Input() routerLinkValue: string = ''
}
