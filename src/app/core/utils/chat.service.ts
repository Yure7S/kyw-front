import { Injectable, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Message } from '../model/message.model';
import { Observable } from 'rxjs';
import { MessageInput } from '../model/message-input.model';
import { webSocket } from 'rxjs/webSocket';
import { Client, CompatClient, IPublishParams, Stomp, StompConfig } from '@stomp/stompjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl
  private connectionUrl = `${this.apiUrl}/connect`
  private currentUserService = inject(CurrentUserService)
  private client!: Client

  connect() {
    this.client = new Client({
      brokerURL: this.connectionUrl,
      onConnect: (e) => console.log(e.command),
      onDisconnect: (e) => console.log(e.command)
    });
    this.client.activate()
  }

  send(projectId: string, message: string) {
    const sender = this.currentUserService.currentUserSig()?.id
    const newMessage = { projectId, sender, message, }
    this.client.publish({
      destination: `${this.apiUrl}/project/${projectId}`,
      body: JSON.stringify(newMessage)
    })
  }

  disconnect() {
    this.client.deactivate()
  }
}
