import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class ChatInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneReq: any = null;
    const token = localStorage.getItem('token');

    const baseUrl = environment.baseUrl;
    const userUrl = environment.users;

    if (!!token) {
      let headers = req.headers.set('Authorization', 'Token ' + token);

      if (req.url.includes(userUrl)) {
        cloneReq = req.clone({ headers: headers, url: req.url });
      }
    } else {
      cloneReq = req.clone({ url: req.url });
    }
    return next.handle(cloneReq).pipe(
      tap((ev: any) => { }, (err: any) => {
        const error = err instanceof HttpErrorResponse;
        const errorStatus = err.status;

        if (error && errorStatus === 401) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('');
        }
      }));
  }
}
