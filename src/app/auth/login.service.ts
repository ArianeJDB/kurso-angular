import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './login/Token';
@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http: HttpClient, @Inject('config') private config) { }

  login(username, password): Observable<Token> {
    return this.http.post<Token>(this.config.api + 'auth', {username, password});
  }
}
