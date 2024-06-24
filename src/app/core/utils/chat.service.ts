import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Message } from '../model/message.model';
import { Observable } from 'rxjs';
import { MessageInput } from '../model/message-input.model';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket?: WebSocket
  private apiUrl = environment.apiUrl
  private connectionUrl = `${this.apiUrl}/connect`
  
  connect() {
    this.socket = new WebSocket(this.connectionUrl)

    this.socket.onopen = (e) => {
      console.log('Chat aberto')
      console.log(e)
    }

    this.socket.onmessage = (e) => {
      console.log('Menssagem enviada')
      console.log(e)
    }

    this.socket.onerror = (e) => {
      console.log(e)
    }
    
    this.socket.onclose = (e) => {
      console.log('Chat feachado')
      console.log(e)
    }
  }

  send(projectId: string, message: string) {
    const newMessage = { projectId, message }
    this.socket?.send(JSON.stringify(newMessage))
  }

  disconnect() {
    this.socket?.close()
  }
}
