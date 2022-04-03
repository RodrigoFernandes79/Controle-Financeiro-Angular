import { NgModule } from '@angular/core';
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

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormulariosComponent,
    
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
    TieredMenuModule
   
  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
