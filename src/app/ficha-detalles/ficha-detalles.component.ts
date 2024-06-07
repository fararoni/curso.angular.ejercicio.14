import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-ficha-detalles',
  standalone: true,
  imports: [],
  templateUrl: './ficha-detalles.component.html',
  styleUrl: './ficha-detalles.component.css'
})
export class FichaDetallesComponent {

  idPersona: number = 0;


  @Input()
  set id(id: number) {
    console.log(id);
    this.idPersona = id;
  }
}
