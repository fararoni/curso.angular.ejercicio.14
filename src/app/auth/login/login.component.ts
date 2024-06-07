import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  
  constructor( private authService: AuthService,
               private router: Router
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Almacenar el token en el almacenamiento local
        console.log(response);

        let resp  = response as {message:string, token: string};
        this.authService.setToken(resp.token) ;

        // localStorage.setItem('jwt_token', resp.token );
        console.log(resp.token);
        // Redirigir a la página de inicio
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error durante el login:', error);
        this.router.navigate(['/noexiste']);
        // Manejar errores de inicio de sesión
      }
    );
  }

  salir():void{
    console.log('salir()');
    this.authService.logout();
  }

}
