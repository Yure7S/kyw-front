import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetterResponse } from '../model/getter-response.interface';
import { Project } from '../model/project.interface';
import { Task } from '../model/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  http = inject(HttpClient)
  api = environment.apiUrl

  getAll(pageSize: number = 10, pageNumber: number = 0): Observable<GetterResponse<Task[]>> {
    return this.http.get<GetterResponse<Task[]>>(`${this.api}/tasks`, {
      params: {
        page: pageNumber,
        size: pageSize,
        sort: 'asc'
      }
    }).pipe(shareReplay())
  }

  getById(taskId: string): Observable<Task> {
    return this.http.get<Task>(`${this.api}/tasks/${taskId}`)

  }
}
