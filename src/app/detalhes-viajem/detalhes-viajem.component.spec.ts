import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesViajemComponent } from './detalhes-viajem.component';

describe('DetalhesViajemComponent', () => {
  let component: DetalhesViajemComponent;
  let fixture: ComponentFixture<DetalhesViajemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesViajemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesViajemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
