import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent {
  @Input() smaller: boolean = false
  @Input() url?: string

  apiUrl = environment.apiUrl
}
