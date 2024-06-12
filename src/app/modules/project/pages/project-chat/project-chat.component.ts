import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/core/utils/chat.service';

@Component({
  selector: 'app-project-chat',
  templateUrl: './project-chat.component.html',
  styleUrls: ['./project-chat.component.scss']
})
export class ProjectChatComponent implements OnInit, OnDestroy {
  chatService = inject(ChatService)

  messageControl: FormControl = new FormControl()

  ngOnInit(): void {
    this.chatService.openConnection()
  }

  ngOnDestroy(): void {
    this.chatService.closeConnection()
  }

  send() {
    this.chatService.sendMessage(this.messageControl.value)
    this.messageControl.reset()
  }
}
