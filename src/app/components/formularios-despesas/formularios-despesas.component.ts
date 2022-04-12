import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-formularios-despesas',
  templateUrl: './formularios-despesas.component.html',
  styleUrls: ['./formularios-despesas.component.scss']
})
export class FormulariosDespesasComponent implements OnInit {


  despesas:Despesas[]=[];
  descricao:string='';
  

  constructor(private service:DespesasService, private router:Router) { }

  ngOnInit(): void {
    this.listarDespesas();
    

    
  }

  listarDespesas():void{
    this.service.getDespesas().subscribe(resposta=>{
      console.log(resposta)
      this.despesas=resposta;
    })
  }
 adicionaDespesa(){
   this.router.navigate(['/despesas/criadespesas'])
 }
 pesquisarDespesas(): void{
   this.service.pesquisar({descricao:this.descricao})
.subscribe(resposta=>{
  this.despesas=resposta;
})
   
 }
}


