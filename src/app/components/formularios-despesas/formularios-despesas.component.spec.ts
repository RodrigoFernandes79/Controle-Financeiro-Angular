import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosDespesasComponent } from './formularios-despesas.component';

describe('FormulariosDespesasComponent', () => {
  let component: FormulariosDespesasComponent;
  let fixture: ComponentFixture<FormulariosDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosDespesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
