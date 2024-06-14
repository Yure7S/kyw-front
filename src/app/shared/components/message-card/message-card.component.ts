import { Component, Input } from '@angular/core';
import { Message } from 'src/app/core/model/message.model';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent {
  @Input() currentUserMessage?: boolean = false
  @Input() first?: boolean = false
  @Input() message?: Message
}
