import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // recperar el token
    const token = sessionStorage.getItem('token');

    // const token = this.auth.login;

    const authReq = req.clone(
      {headers: req.headers.set('Authorization', 'Bearer ' + token)}
      // luego aqui hay que pasarselo al siguiente interceptor de l alista
    );
    return next.handle(authReq);
    }


}
