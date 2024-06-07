import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivismoComponent } from './activismo.component';

describe('ActivismoComponent', () => {
  let component: ActivismoComponent;
  let fixture: ComponentFixture<ActivismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivismoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
