import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Login } from '../model/login.interface';
import { Register } from '../model/register.interface';
import { Project } from '../model/project.interface';
import { GetterResponse } from '../model/getter-response.interface';
import { ProjectInput } from '../model/project-input.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectInputSig = signal<ProjectInput | null>(null)

  http = inject(HttpClient)
  api = environment.apiUrl

  getAll(pageSize: number = 10, pageNumber: number = 0): Observable<any> {
    return this.http.get<any>(`${this.api}/users/projects`, {
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

  create(project: FormData): Observable<Project> {
    return this.http.post<Project>(`${this.api}/projects`, project)
  }
}
