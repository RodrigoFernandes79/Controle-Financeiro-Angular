import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receitas } from '../models/receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private receitasUrl: string = 'http://localhost:8080/receitas'

  constructor(private http:HttpClient, private datePipe:DatePipe) { }


  getReceitas():Observable<Receitas[]>{
    return this.http.get<Receitas[]>(`${this.receitasUrl}/getall`);
  }
  createReceitas(receitas:Receitas):Observable<Receitas>{
 
    return this.http.post<Receitas>(this.receitasUrl,Receitas.toJson(receitas));
    
  }
  pesquisar(filtro:any):Observable<any[]>{
    let params = new HttpParams();

    if(filtro.descricao){
      params = params.set('descricao',filtro.descricao);
    }
    return this.http.get<any[]>(`${this.receitasUrl}?`,{params}) 
  }

  pesquisarDatas(ano:any, mes:any):Observable<any[]>{
    
    if (ano){
      ano =this.datePipe.transform(ano,'yyyy');
     }
    if(mes){
      
    mes = this.datePipe.transform(mes,'MM');
    }
    
     return this.http.get<any[]>(`${this.receitasUrl}/${ano}/${mes}`)
  }
  deletarReceitas(id:any):Observable<Receitas>{
  
    return this.http.delete<Receitas>(`${this.receitasUrl}/${id}`)
  }

   encontrarReceitasPorId(id:any):Observable<any>{
     
     return this.http.get<any>(`${this.receitasUrl}/${id}`)
   }

   alterarReceitasPorId(receitas:Receitas,id:any):Observable<Receitas>{
 

    return this.http.put<Receitas>(`${this.receitasUrl}/${id}`,receitas)
     }
}