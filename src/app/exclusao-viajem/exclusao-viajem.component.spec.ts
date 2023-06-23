import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoViajemComponent } from './exclusao-viajem.component';

describe('ExclusaoViajemComponent', () => {
  let component: ExclusaoViajemComponent;
  let fixture: ComponentFixture<ExclusaoViajemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusaoViajemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusaoViajemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
