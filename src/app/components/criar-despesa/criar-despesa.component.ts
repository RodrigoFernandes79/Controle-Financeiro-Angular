
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-criar-despesa',
  templateUrl: './criar-despesa.component.html',
  styleUrls: ['./criar-despesa.component.scss']
})
export class CriarDespesaComponent implements OnInit {

despesas:Despesas =new Despesas();



tipo = [
  { label: 'Fixa', value: 'FIXA' },
  { label: 'Variavel', value: 'VARIAVEL' },
];

categoria =[
 {label:'Alimentação' , value: 'ALIMENTACAO'}, 
 {label:'Saúde' , value: 'SAUDE'}, 
 {label:'Moradia' , value: 'MORADIA'},
 {label:'Transporte' , value: 'TRANSPORTE'},
 {label:'Educação' , value: 'EDUCACAO'},
 {label:'Lazer' , value: 'LAZER'},
 {label:'Imprevistos' , value: 'IMPREVISTOS'},
 {label:'Outras' , value: 'OUTRAS'},

]
  

  constructor(private service:DespesasService, private router:Router) { }

  ngOnInit(): void {
  }


  adicionaDespesas():void{
    
  
    this.service.createDespesas(this.despesas).subscribe(()=>{
      this.router.navigate(['/despesas'])
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: `Despesa ${this.despesas.descricao} adicionada com sucesso!`,
        showConfirmButton: false,
        timer: 3500
      })
     this.despesas=new Despesas();
    
    },err =>{
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Despesa ${this.despesas.descricao} não pôde ser cadastrada`,
        footer: err.error.mensagem
      })
    }
   )
  }
  
  reset(){
    this.despesas= new Despesas();
  }
}
