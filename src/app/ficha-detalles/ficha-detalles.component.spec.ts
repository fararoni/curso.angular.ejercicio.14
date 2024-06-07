import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDetallesComponent } from './ficha-detalles.component';

describe('FichaDetallesComponent', () => {
  let component: FichaDetallesComponent;
  let fixture: ComponentFixture<FichaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
