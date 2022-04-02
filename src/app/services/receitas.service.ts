import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receitas } from '../models/receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private receitasUrl: string = 'http://localhost:8080/receitas/'

  constructor(private http:HttpClient) { }


  getReceitas():Observable<Receitas[]>{
    return this.http.get<Receitas[]>(this.receitasUrl+'getall');
  }
  
}