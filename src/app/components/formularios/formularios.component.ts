import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receitas } from 'src/app/models/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  receitas:Receitas[]=[]
  descricao:string='';
  mes?:Date;
  ano?:Date;
  
  receita:Receitas =new Receitas();

  id:number;

  constructor(private service:ReceitasService,private router:Router) { }

  ngOnInit(): void {
    this.listarReceitas();
  }

  listarReceitas():void{
    this.service.getReceitas().subscribe(resposta=>{
    console.log(resposta)
      this.receitas=resposta;
    })
  }

  adicionaReceita(){
    this.router.navigate(['/receitas/criareceitas'])
  }

  pesquisarReceitas(): void{
   
    this.service.pesquisar({descricao:this.descricao})
    .subscribe(resposta=>{
      this.receitas=resposta;
      
    }),this.service.pesquisarDatas(this.ano,this.mes).subscribe(resposta=>{
   
   
      this.receitas=resposta;
    })
   }

   deletarReceita(receita:Receitas):void{
    this.receita=receita;
   
    this.service.encontrarReceitasPorId(this.receita.id).subscribe((resposta) =>{
    this.receita = resposta;
    Swal.fire({
     title: 'Você tem certeza que quer apagar  '+  this.receita.descricao +' ?',
     text: "Você não poderá mais reverter isso!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Sim, quero apagar!'
   }).then((result) => {
     if (result.isConfirmed) {
       this.service.deletarReceitas(this.receita.id)
 .subscribe(() =>{
       Swal.fire(
        'Apagado!',
         `Receita ${this.receita.descricao} foi deletada`,
         'success'
         
         
        )
        this.listarReceitas();
 
       },     
       err=> err.error(Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Despesa não deletada!Favor tente novamente',
       
       })))
 }
  
   this.listarReceitas();
 })
  
 } )
 }
 
 
 
 
 

}
