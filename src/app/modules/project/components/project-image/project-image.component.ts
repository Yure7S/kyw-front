import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss']
})
export class ProjectImageComponent {
  @Input() src?: string
  @Input() smaller: boolean = false
}
