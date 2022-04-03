import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesas } from '../models/despesas';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
private despesasUrl:string ='http://localhost:8080/despesas/'
  constructor(private http:HttpClient) { }

  getDespesas():Observable<Despesas[]>{
    return this.http.get<Despesas[]>(this.despesasUrl+'getall');
  }
}
