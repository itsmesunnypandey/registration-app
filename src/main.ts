import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from './app/interceptors/http-error.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
});
