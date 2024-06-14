import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Message } from '../model/message.model';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { MessageInput } from '../model/message-input.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {}

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  joinProject(projectId: string) {
    this.socket.emit('join', { projectId });
  }

  sendMessage(projectId: string, message: MessageInput) {
    this.socket.emit(`/chat/project/${projectId}`, { message });
  }

  receiveMessages(projectId: string): Observable<any> {
    return this.socket.fromEvent(`/project/${projectId}`);
  }
}
