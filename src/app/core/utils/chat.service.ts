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
    this.websocket = new WebSocket("wss://echo.websocket.org")

    this.websocket.onopen = (e) => {
      console.log('chat aberto')
      console.log(e)
    }

    this.websocket.onmessage = (e) => {
      console.log(e)
      console.log('Enviando mensagem')
      this.messages.push(e.data)
    }

    this.websocket.onclose = (e) => {
      console.log('chat fechado')
      console.log(e)
    }
  }

  sendMessage(message: string) {
    this.websocket?.send(message)
  }

  closeConnection() {
    this.websocket?.close()
  }
}
