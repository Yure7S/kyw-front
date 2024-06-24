import { Injectable, inject } from '@angular/core';
import { MessageInput } from '../model/message-input.model';
import { Message } from '../model/message.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ChatService } from '../utils/chat.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  http = inject(HttpClient)
  chatService = inject(ChatService)
  api = environment.apiUrl

  getRecentMessages(projectId: string, onMessageReceived: Function): void {
    this.chatService.subscribe(`/project/${projectId}`, (message: any) => onMessageReceived(message))
  }
}
