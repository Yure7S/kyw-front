import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent {
  @Input() url?: string
  @Input() smaller: boolean = false

  apiUrl = environment.apiUrl

  getFullImageUrl(relativeUrl: string): string {
    return `${this.apiUrl}${relativeUrl}`;
  }
}
