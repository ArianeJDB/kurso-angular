import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  phrases: string;

  constructor(private http: HttpClient, @Inject('config') private config) { }

  getPhrases(): Observable<string> {
    return this.http.get(this.config.api + 'api/random-quote', {responseType: 'text'});
  }

  getProtectedQuote(): Observable<string> {
    return this.http.get(this.config.api + 'api/protected/random-quote', {responseType: 'text'});
  }
}
