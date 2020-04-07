import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDTO } from './users-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UsersProxyService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersDTO[]> {
    return this.httpClient.get<UsersDTO[]>('http://localhost:3001/api/public/users');
  }
}
