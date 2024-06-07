import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup} from  '@angular/forms';
import {CommonModule} from '@angular/common';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-generales',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './generales.component.html',
  styleUrl: './generales.component.css'
})
export class GeneralesComponent {

  generales = {
    nombre :  '',
    email :   '',
    edad : 0,
    domicilio : '',
    telefono : '',
  }

  generalesForm = new FormGroup({
    nombre :  new FormControl('',[ Validators.required,Validators.minLength(3) ]),
    email :   new FormControl(''),
    edad : new FormControl(''),
    domicilio : new FormControl(''),
    telefono : new FormControl(''),
  });

  actualizarNombre() {
    this.generalesForm.patchValue( {nombre : 'xxx' } );
    // this.generalesForm.setValue
  }

  onSubmit() {
    // TODO: Usar EventEmitter para notificar este resultado fuera del componente
    console.log(this.generalesForm.value);
  }

  get nombre() {
    return this.generalesForm.get('nombre');
  }
  get ciudad() {
    return this.generalesForm.get('ciudad');
  }

}
