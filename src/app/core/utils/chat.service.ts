import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  websocket?: WebSocket;
  messages: string[] = []
  apiUrl = environment.apiUrl

  openConnection() {
    this.websocket = new WebSocket("ws://localhost:8080/connect")

    this.websocket.onopen = (e) => {
      console.log('chat aberto')
      console.log(e)
    }

    this.websocket.onmessage = (e) => {
      console.log(e)
      const chatMessage = JSON.parse(e.data)
      this.messages.push(chatMessage)
    }

    this.websocket.onclose = (e) => {
      console.log('chat fechado')
      console.log(e)
    }
  }

  sendMessage(message: string) {
    this.websocket?.send(JSON.stringify(message))
  }

  closeConnection() {
    this.websocket?.close()
  }
}
