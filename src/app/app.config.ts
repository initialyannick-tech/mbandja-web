import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { HttpInterceptor } from './core/interceptors/http.interceptor';
import {provideToastr} from 'ngx-toastr';
import {provideClientHydration} from '@angular/platform-browser';
import {NgxPermissionsModule} from 'ngx-permissions';
import {provideAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([HttpInterceptor])
    ),
    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    provideClientHydration(),
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    provideAnimations(),
    provideZoneChangeDetection({eventCoalescing: true})
  ]
};
