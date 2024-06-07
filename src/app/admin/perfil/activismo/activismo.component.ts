import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivismoService } from '../../../core/services/activismo.service'; 

@Component({
  selector: 'app-activismo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activismo.component.html',
  styleUrl: './activismo.component.css'
})
export class ActivismoComponent {
  items: string[] = [];

  constructor(private activismoService: ActivismoService) {
     this.activismoService.getActivismo().subscribe(
      (items) => {
        this.items = items;
      }
    )
  }

  addItem(newItem: string): void {
    this.activismoService.addActivismo(newItem).subscribe(
      (response) => {
        console.log('Se agregó este activismo', response);
      },
      (error) => {
        console.error('Error al agregar el activismo', error);
      }
    )
  }
}
