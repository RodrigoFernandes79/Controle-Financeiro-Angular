import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarReceitaComponent } from './alterar-receita.component';

describe('AlterarReceitaComponent', () => {
  let component: AlterarReceitaComponent;
  let fixture: ComponentFixture<AlterarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
