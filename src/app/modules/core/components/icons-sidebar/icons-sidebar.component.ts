import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';

@Component({
  selector: 'app-icons-sidebar',
  templateUrl: './icons-sidebar.component.html',
  styleUrls: ['./icons-sidebar.component.scss']
})
export class IconsSidebarComponent {
  currentUserService = inject(CurrentUserService)
}
