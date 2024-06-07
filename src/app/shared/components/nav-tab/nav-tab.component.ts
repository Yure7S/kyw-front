import { Component, Input, inject } from '@angular/core';
import { Sidebar } from 'src/app/core/model/sidebar.interface';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent {
  @Input() content?: Sidebar[]
  trackByService = inject(TrackByService)
}
