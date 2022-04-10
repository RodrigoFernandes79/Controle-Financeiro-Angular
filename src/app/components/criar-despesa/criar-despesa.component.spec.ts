import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDespesaComponent } from './criar-despesa.component';

describe('CriarDespesaComponent', () => {
  let component: CriarDespesaComponent;
  let fixture: ComponentFixture<CriarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarDespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
