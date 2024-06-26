import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Login } from '../model/login.interface';
import { Register } from '../model/register.interface';
import { Project } from '../model/project.interface';
import { GetterResponse } from '../model/getter-response.interface';
import { ProjectInput } from '../model/project-input.interface';
import { Member } from '../model/member.interface';
import { Message } from '../model/message.model';
import { MessageResponse } from '../model/message-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectInputSig = signal<ProjectInput | null>(null)

  http = inject(HttpClient)
  api = environment.apiUrl

  getAll(pageSize: number = 10, pageNumber: number = 0): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.api}/users/projects`, {
      params: {
        page: pageNumber,
        size: pageSize,
        sort: 'asc'
      }
    }).pipe(shareReplay())
  }

  getById(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${this.api}/projects/${projectId}`)
      .pipe(shareReplay())
  }

  getMembers(projectId: string): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.api}/projects/${projectId}/members`)
      .pipe(shareReplay())
  }

  getMessages(projectId: string, pageSize: number = 10000, pageNumber: number = 0): Observable<MessageResponse[]> {
    return this.http.get<MessageResponse[]>(`${this.api}/messages/project/${projectId}`, {
      params: {
        page: pageNumber,
        limit: pageSize,
        sort: 'asc'
      }
    })
      .pipe(shareReplay())
  }

  create(project: FormData): Observable<Project> {
    return this.http.post<Project>(`${this.api}/projects`, project)
  }
}
