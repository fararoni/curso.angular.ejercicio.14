import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})
export class SeguridadComponent {

  autorizado : boolean = false;
  constructor(private authService: AuthService) {
    this.authService.testInterceptorToken().subscribe(
      (response) => { this.autorizado = true},
      (error) => { this.autorizado = false}
    );
    this.autorizado = true; 
  }
}
