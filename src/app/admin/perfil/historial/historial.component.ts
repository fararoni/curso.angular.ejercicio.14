import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IEstudio } from '../../../interfaces/iestudio';


@Component({
  selector: 'app-historial',
  standalone: true,
  
  imports: [CommonModule, FormsModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})



export class HistorialComponent {
  niveles = ['Primaria', 'Secundaria', 'Preparatoria', 'Universidad', 'Posgrado'];
  grados = ['Carrera trunca', 'Licenciatura', 'Maestría', 'Doctorado'];

  modelo : IEstudio = {
    id:1,
    escuela: 'UNAM', 
    nivel: this.niveles[3], 
    grado: this.grados[1], 
    ciudad: "CDMX"
  };

  formSubmited = false;
  onSubmit(){
    this.formSubmited = true;
  }

  nuevoEstudio(){
    this.modelo = {id:2, escuela:'', ciudad:''}
  }
}
