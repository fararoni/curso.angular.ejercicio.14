import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasDashboardComponent } from './fichas-dashboard.component';

describe('FichasDashboardComponent', () => {
  let component: FichasDashboardComponent;
  let fixture: ComponentFixture<FichasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichasDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
