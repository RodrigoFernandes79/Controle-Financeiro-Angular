import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarDespesaComponent } from './alterar-despesa.component';

describe('AlterarDespesaComponent', () => {
  let component: AlterarDespesaComponent;
  let fixture: ComponentFixture<AlterarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarDespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
