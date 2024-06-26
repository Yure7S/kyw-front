import { Component, Input } from '@angular/core';
import { MessageResponse } from 'src/app/core/model/message-response.model';
import { Message } from 'src/app/core/model/message.model';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent {
  @Input() currentUserMessage?: boolean = false
  @Input() message?: MessageResponse
  @Input() first?: boolean = false
}
