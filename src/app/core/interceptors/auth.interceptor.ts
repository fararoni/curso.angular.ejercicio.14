import { HttpInterceptorFn } from '@angular/common/http';

// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del servicio de autenticación
    
    const authToken = this.authService.getToken();
    console.log( '~ interceptor en peticiones HTTP~' );
    console.log( authToken);

    // Clona la solicitud y añade el encabezado de autorización si el token está presente
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      console.log('Se agregó el token al encabezado - verificar en la consola navegador');
    }

    // Manejar la solicitud y capturar errores
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Si el error es 401 (Unauthorized), redirigir a la página de inicio de sesión
        console.log("Mensaje de error y redirect desde el interce´ptor")
        if (error.status === 401) {
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      })
    );
  }
}
