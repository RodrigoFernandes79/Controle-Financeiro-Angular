import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';

import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formularios-despesas',
  templateUrl: './formularios-despesas.component.html',
  styleUrls: ['./formularios-despesas.component.scss']
})
export class FormulariosDespesasComponent implements OnInit {


  despesas:Despesas[]=[];
  descricao:string='';
  mes?:Date;
  ano?:Date;
  
  despesa:Despesas =new Despesas();
 

  constructor(private service:DespesasService, private router:Router) { }
 
  id:number;
 
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
    
  }),this.service.pesquisarDatas(this.ano,this.mes).subscribe(resposta=>{
 
 
    this.despesas=resposta;
  })

 }


 deletaDespesa(despesa:Despesas):void{
   this.despesa=despesa;
  
   this.service.encontrarDespesasPorId(this.despesa.id).subscribe((resposta) =>{
   this.despesa = resposta;
   Swal.fire({
    title: 'Você tem certeza que quer apagar  '+  this.despesa.descricao +' ?',
    text: "Você não poderá mais reverter isso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, quero apagar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deletarDespesas(this.despesa.id)
.subscribe(() =>{
      Swal.fire(
       'Apagado!',
        `Despesa ${this.despesa.descricao} foi deletada`,
        'success'
        
        
       )
       this.listarDespesas();

      },     
      err=> err.error(Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Despesa não deletada!Favor tente novamente',
      
      })))
}
 
  this.listarDespesas();
})
 
} )
}





}
