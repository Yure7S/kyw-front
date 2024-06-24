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
      onDisconnect: (e) => console.log(e.command),
    });
    this.client.activate()
  }

  send(projectId: string, content: string) {
    const sender = this.currentUserService.currentUserSig()?.id
    const newMessage = { sender, content }
    this.client.publish({
      destination: `/chat/project/${projectId}`,
      body: JSON.stringify(newMessage)
    })
  }

  subscribe(destination: string, callback: any) {
    const token = this.currentUserService.currentUserSig()?.token
    this.client.subscribe(destination, callback, { 'Authorization': `Bearer ${token}` })
  }

  disconnect() {
    this.client.deactivate()
  }
}
