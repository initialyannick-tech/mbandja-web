import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import {AuthService} from '../services/auth.service';

// HttpRequestInterceptor to inject the token in the header of the request
export function HttpInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  let authService = inject(AuthService)
  const token = authService.getToken();
  const isAuth = authService.isAuthenticate()
  const apiRegex = new RegExp(`^${environment.api}`)
  if (apiRegex.test(environment.api)) {
    if (isAuth) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next(authReq);
    }
  }
  return next(request);
}
