import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesas } from 'src/app/models/despesas';
import { GastoCategoria } from 'src/app/models/gastoCategoria';

import { Receitas } from 'src/app/models/receitas';
import { ResumoMes } from 'src/app/models/resumoMes';
import { DespesasService } from 'src/app/services/despesas.service';
import { ReceitasService } from 'src/app/services/receitas.service';
import { ResumoMesService } from 'src/app/services/resumo-mes.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {
 
  receitas:Receitas[]=[];
  despesas:Despesas[]=[];
  resumos:ResumoMes[]=[];
  gasto:GastoCategoria[] =[]
  
  mes?:Date;
  ano?:Date;
  
  resumo:ResumoMes=new ResumoMes();

  id:number;

  constructor(private service:ReceitasService,private desesasService:DespesasService,
     private resumoService:ResumoMesService) { }

  ngOnInit(): void {
    
    
  }

 

  pesquisarTudo(): void{
    this.buscarResumoMensal();
    this.buscarResumoMensalCategoria();
    this.service.pesquisarDatas(this.ano,this.mes).subscribe(resposta=>{
      
   
      this.receitas=resposta;
    }),
    this.desesasService.pesquisarDatas(this.ano,this.mes).subscribe(resposta=>{
      this.despesas=resposta;
    })
    
   }
   buscarResumoMensal():void{
     this.resumoService.buscarResumoMensal(this.ano,this.mes).subscribe(resposta=>{
      console.log(resposta.gastoCategoria)
      this.resumo =resposta;
      this.gasto = resposta.gastoCategoria;
      console.log(this.gasto)
      })
     
     
     this.resumo=new ResumoMes();
   }


   buscarResumoMensalCategoria():void{
     this.resumoService.buscarResumoMensalCategoria(this.ano,this.mes).subscribe(resposta=>{
       this.resumos =resposta;
   
      });
      
   
   }
}
