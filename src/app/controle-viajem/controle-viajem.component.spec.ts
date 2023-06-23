import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleViajemComponent } from './controle-viajem.component';

describe('ControleViajemComponent', () => {
  let component: ControleViajemComponent;
  let fixture: ComponentFixture<ControleViajemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleViajemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleViajemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
