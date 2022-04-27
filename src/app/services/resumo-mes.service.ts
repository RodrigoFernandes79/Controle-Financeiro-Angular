import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ResumoMes } from '../models/resumoMes';

@Injectable({
  providedIn: 'root'
})
export class ResumoMesService {

  private resumoMesUrl: string = 'https://controle-financeiro-api-spring.herokuapp.com/resumo'
  

  constructor(private http:HttpClient, private datePipe:DatePipe) { }

  buscarResumoMensal(ano:any, mes:any):Observable<ResumoMes>{
    if (ano){
      ano =this.datePipe.transform(ano,'yyyy');
     }
    if(mes){
      
    mes = this.datePipe.transform(mes,'MM');
    }
    return this.http.get<ResumoMes>(`${this.resumoMesUrl}/${ano}/${mes}`);
  }
 
  buscarGastoPorCategoria():Observable<ResumoMes>{
    return this.http.get<ResumoMes>(`${this.resumoMesUrl}`)
  }


  buscaReceitasPorMes():Observable<ResumoMes>{
    return this.http.get<ResumoMes>(`${this.resumoMesUrl}/totalReceitas`)
  }

  buscaGastoPorMes():Observable<ResumoMes>{
    
    return this.http.get<ResumoMes>(`${this.resumoMesUrl}/totalDespesas`)
  }

  saldoFinal():Observable<ResumoMes>{
    return this.http.get<ResumoMes>(`${this.resumoMesUrl}/saldoMensal`)
  }
}
