import { Component, Input } from '@angular/core';
import { Status } from 'src/app/core/enums/status.enum';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent {
  @Input() status?: Status
  statusEnum: typeof Status = Status
}
