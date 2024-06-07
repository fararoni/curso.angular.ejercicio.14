import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasEditarComponent } from './fichas-editar.component';

describe('FichasEditarComponent', () => {
  let component: FichasEditarComponent;
  let fixture: ComponentFixture<FichasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichasEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
