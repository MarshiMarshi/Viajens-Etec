import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroViajemComponent } from './cadastro-viajem.component';

describe('CadastroViajemComponent', () => {
  let component: CadastroViajemComponent;
  let fixture: ComponentFixture<CadastroViajemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroViajemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroViajemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
