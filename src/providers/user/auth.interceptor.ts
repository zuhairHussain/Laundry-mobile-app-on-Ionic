// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
//import { User } from './user';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from your auth service.
    const authToken = localStorage.getItem('token');
    const authReq = req.clone({headers: req.headers.set('Authorization', `JWT ${authToken}`)});
    return next.handle(authReq);
}
}