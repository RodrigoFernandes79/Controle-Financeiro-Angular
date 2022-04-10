import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarDespesaComponent } from './components/criar-despesa/criar-despesa.component';

import { FormulariosDespesasComponent } from './components/formularios-despesas/formularios-despesas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'receitas', component:FormulariosComponent},
  {path:'home', component:HomeComponent},
 {path:'despesas',component:FormulariosDespesasComponent},
  {path:'despesas/criadespesas',component:CriarDespesaComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
