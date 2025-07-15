import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = '';

        if (error.error instanceof ProgressEvent || error.status === 0) {
          message = 'Network or CORS issue. Please check your connection or server.';
        } else {
          message = error.error?.message || `Server Error: ${error.status} ${error.statusText}`;
        }

        console.error('HTTP Error:', message);
        alert(message);

        return throwError(() => new Error(message));
      })
    );
  }
}
