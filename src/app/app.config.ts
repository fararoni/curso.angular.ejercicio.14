/*
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding  } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [  provideZoneChangeDetection({ eventCoalescing: true }),
                provideRouter(routes, withComponentInputBinding()),
                provideClientHydration(),
                provideHttpClient(),
              ]
};
*/ 

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding  } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [  provideZoneChangeDetection({ eventCoalescing: true }),
                provideRouter(routes, withComponentInputBinding()),
                provideClientHydration(),
                provideHttpClient(
                  withInterceptorsFromDi()
                ),
                AuthService,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

              ]
};