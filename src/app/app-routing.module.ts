import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './404/not-found404/not-found404.component';
import { AlterarDespesaComponent } from './components/alterar-despesa/alterar-despesa.component';
import { AlterarReceitaComponent } from './components/alterar-receita/alterar-receita.component';
import { CriarDespesaComponent } from './components/criar-despesa/criar-despesa.component';
import { CriarReceitaComponent } from './components/criar-receita/criar-receita.component';

import { FormulariosDespesasComponent } from './components/formularios-despesas/formularios-despesas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HomeComponent } from './components/home/home.component';
import { ResumoComponent } from './components/resumo/resumo.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'receitas', component:FormulariosComponent},
  {path:'receitas/criareceitas',component:CriarReceitaComponent},
  {path:'receitas/:id',component:AlterarReceitaComponent},
  {path:'home', component:HomeComponent},
  
 {path:'despesas',component:FormulariosDespesasComponent},
  {path:'despesas/criadespesas',component:CriarDespesaComponent},
  {path:'despesas/:id',component:AlterarDespesaComponent},
  {path:'resumo', component:ResumoComponent},
  {path:'**',component: NotFound404Component},

  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
