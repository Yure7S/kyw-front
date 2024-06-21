import { Injectable, inject } from '@angular/core';
import { MessageInput } from '../model/message-input.model';
import { Message } from '../model/message.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  http = inject(HttpClient)
  api = environment.apiUrl

  send(projectId: string, message: MessageInput): Observable<Message> {
    return this.http.get<Message>(`${this.api}/tasks`)
  }
}
