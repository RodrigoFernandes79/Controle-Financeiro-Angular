
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Despesas } from '../models/despesas';
import { GastoTipoDTO } from '../models/gastoTipo';


@Injectable({
  providedIn: 'root'
})
export class DespesasService {
 
private despesasUrl:string ='https://controle-financeiro-api-spring.herokuapp.com/despesas'
  
  constructor(private http:HttpClient, private datePipe:DatePipe) { }


  getDespesas():Observable<Despesas[]>{
    return this.http.get<Despesas[]>(`${this.despesasUrl}/getall`);
  }

  createDespesas(despesas:Despesas):Observable<Despesas>{
    return this.http.post<Despesas>(this.despesasUrl,Despesas.toJson(despesas));
    
  }

  pesquisar(filtro:any):Observable<any[]>{
    let params = new HttpParams();

    if(filtro.descricao){
      params = params.set('descricao',filtro.descricao);
    }
    return this.http.get<any[]>(`${this.despesasUrl}?`,{params}) 
  }

  pesquisarDatas(ano:any, mes:any):Observable<any[]>{
    
    if (ano){
      ano =this.datePipe.transform(ano,'yyyy');
     }
    if(mes){
      
    mes = this.datePipe.transform(mes,'MM');
    }
    
  console.log(mes,ano)
     return this.http.get<any[]>(`${this.despesasUrl}/${ano}/${mes}`)
  }

deletarDespesas(id:any):Observable<Despesas>{
  
  return this.http.delete<Despesas>(`${this.despesasUrl}/${id}`)
}

 encontrarDespesasPorId(id:any):Observable<any>{
   
   return this.http.get<any>(`${this.despesasUrl}/${id}`)
 }

 alterarDespesasPorId(despesas:Despesas,id:any):Observable<Despesas>{
 

return this.http.put<Despesas>(`${this.despesasUrl}/${id}` ,despesas)
 }

 gastoTipo():Observable<GastoTipoDTO[]>{
  return this.http.get<GastoTipoDTO[]>(`${this.despesasUrl}/tipos`);
}
}