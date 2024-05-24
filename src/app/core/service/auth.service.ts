import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Register } from '../model/register.interface';
import { Login } from '../model/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)
  api = environment.apiUrl

  login(loginData: Login): Observable<any> {
    return this.http.post(`${this.api}/auth/signin`, loginData)
  }

  register(registerData: Register): Observable<any> {
    return this.http.post(`${this.api}/auth/register`, registerData)
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.api}/auth/refreshtoken`, refreshToken)
  }
  
  logOut() {} // TO DO
}
