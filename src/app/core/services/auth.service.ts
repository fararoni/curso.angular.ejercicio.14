import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
    // 1. url del servicio:
    private apiUrl = 'http://localhost:3000';

    // 2. Inyectar el cliente http en el constructor.
    constructor(private http: HttpClient) {
      console.log('constructor - AuthService');
    }

    login(username: string, password: string): Observable<unknown> {
      console.log(`AuthService: login ${username}`)
      return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
    }

    logout(): void {
      // Eliminar el token del almacenamiento local
      console.log('Token removido');
      localStorage.removeItem('jwt_token');
    }
  
    isLoggedIn(): boolean {
      // Comprobar si el token está presente en el almacenamiento local
      return !!localStorage.getItem('jwt_token');
    }

    //----
    getToken(): string | null {
      return localStorage.getItem('jwt_token');
    }

    setToken(token: string): void {
      localStorage.setItem('jwt_token', token);
    }

    
    testInterceptorToken(): Observable<string[]> {
      return this.http.get<any>( `${this.apiUrl}/protected`);
    }
 }
