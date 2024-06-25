import { Injectable, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Message } from '../model/message.model';
import { Observable, Subject } from 'rxjs';
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
  private getConnectionSubject = new Subject<void>()
  private client!: Client

  get afterConnecting() {
    return this.getConnectionSubject.asObservable()
  }

  connect() {
    this.client = new Client({
      brokerURL: this.connectionUrl,
      onConnect: () => {
        this.getConnectionSubject.next()
        this.getConnectionSubject.complete()
      },
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
