import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alterar-despesa',
  templateUrl: './alterar-despesa.component.html',
  styleUrls: ['./alterar-despesa.component.scss']
})
export class AlterarDespesaComponent implements OnInit {

  id:number;
despesas:Despesas;




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

  constructor(private route:ActivatedRoute, private service:DespesasService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.encontraDespesaPorId();
  
  }

encontraDespesaPorId():void{
this.service.encontrarDespesasPorId(this.id).subscribe(resposta=>{
 

   this.despesas = resposta;
   
})
}

alteraDespesas(): void{
  
    this.service.alterarDespesasPorId(this.despesas, this.id).subscribe(resposta=>{
      console.log(resposta)
     

      this.despesas = resposta;
      console.log(this.despesas)

      this.router.navigate(['/despesas'])
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: `Despesa ${this.despesas.descricao} alterada com sucesso!`,
        showConfirmButton: false,
        timer: 3500
      })
     
    
    },err =>{
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Despesa ${this.despesas.descricao} não pôde ser cadastrada`,
        footer: err.error.message
      })
    }
   )
  }
  


  reset(){
    this.despesas= new Despesas();
  }
}
