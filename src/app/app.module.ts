import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./templates/navbar/navbar.component";
import {MegaMenuModule} from 'primeng/megamenu';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { FormulariosComponent } from './components/formularios/formularios.component';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {StyleClassModule} from 'primeng/styleclass';
import {ListboxModule} from 'primeng/listbox';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { HomeComponent } from './components/home/home.component';
import {CardModule} from 'primeng/card';
import { FormulariosDespesasComponent } from './components/formularios-despesas/formularios-despesas.component';
import { CriarDespesaComponent } from './components/criar-despesa/criar-despesa.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputNumberModule} from 'primeng/inputnumber';
import { RouterModule } from '@angular/router';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AlterarDespesaComponent } from './components/alterar-despesa/alterar-despesa.component';
import { CriarReceitaComponent } from './components/criar-receita/criar-receita.component';
import { AlterarReceitaComponent } from './components/alterar-receita/alterar-receita.component';
import { NotFound404Component } from './404/not-found404/not-found404.component';
import {ImageModule} from 'primeng/image';
import { pipeReplace } from './pipes/pipeReplace';
import { ResumoComponent } from './components/resumo/resumo.component';
import { ChartsComponent } from './components/charts/charts.component';
import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel'
registerLocaleData(localePt, 'pt-BR');


 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormulariosComponent,
    HomeComponent,
    FormulariosDespesasComponent,
    CriarDespesaComponent,
    AlterarDespesaComponent,
    CriarReceitaComponent,
    AlterarReceitaComponent,
    NotFound404Component,
   pipeReplace,
   ResumoComponent,
   ChartsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    MegaMenuModule,
    SidebarModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    TooltipModule,
    StyleClassModule,
    ListboxModule,
    TieredMenuModule,
    CardModule,
    CalendarModule, 
    //importar o BrowserAnimationsModule para mostrar o calendario 
    BrowserAnimationsModule,
    DropdownModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MessagesModule,
    MessageModule,
    InputNumberModule,
    ImageModule,
    ChartModule,
    PanelModule
   
   
  
  
    
   
  
    
   
  ],
  providers: [DatePipe,
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





