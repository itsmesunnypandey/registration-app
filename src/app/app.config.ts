// import {
//   ApplicationConfig,
//   provideBrowserGlobalErrorListeners,
//   provideZonelessChangeDetection
// } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZonelessChangeDetection(),
//     provideHttpClient(withInterceptorsFromDi()), // ← Use DI-based interceptors
//     provideRouter(routes)
//   ]
// };


import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
