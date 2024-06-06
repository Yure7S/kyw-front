import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Login } from '../model/login.interface';
import { Register } from '../model/register.interface';
import { Project } from '../model/project.interface';
import { GetterResponse } from '../model/getter-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  http = inject(HttpClient)
  api = environment.apiUrl

  getAll(pageSize: number = 10, pageNumber: number = 0): Observable<GetterResponse<Project[]>> {
    return this.http.get<GetterResponse<Project[]>>(`${this.api}/projects?page=${pageNumber}&size=10&sort=asc`, {
      params: {
        page: pageNumber,
        size: pageSize,
        sort: 'asc'
      }
    }).pipe(shareReplay())
  }

}
