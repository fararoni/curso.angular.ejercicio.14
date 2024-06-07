import { Component } from '@angular/core';
import { RouterOutlet , RouterModule} from '@angular/router';

import { FichasComponent } from './fichas/fichas.component';
import { ResaltadoDirective } from './shared/directivas/resaltado.directive'

import { DatePipe } from  '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichasComponent, ResaltadoDirective,  DatePipe,  RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fichas curriculares';
  fechaHoy = new Date();
}


